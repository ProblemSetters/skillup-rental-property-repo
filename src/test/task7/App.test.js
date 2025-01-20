import React from "react";
import App from "../../App";
import { screen, render, cleanup, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

global.console.warn = jest.fn();
global.console.error = jest.fn();
describe("User Profile Management Testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  
  it("User modal is opening with correct initial state and routing for login is correctly setup", async () => {
    expect(window.location.pathname).toBe("/");
    const userButton = screen.getByTestId("user-btn");
    fireEvent.click(userButton);

    const loginButton = screen.queryByTestId("login-btn");
    const contactUsButton = screen.queryByTestId("contact-us-btn");
    const userProfileButton = screen.queryByTestId("user-profile-btn");
    const logoutButton = screen.queryByTestId("logout-btn");
    expect(loginButton).toBeInTheDocument();
    expect(contactUsButton).toBeInTheDocument();
    expect(userProfileButton).not.toBeInTheDocument();
    expect(logoutButton).not.toBeInTheDocument();
    
    fireEvent.click(loginButton);
    const loginSubmitButton = screen.queryByTestId("login-button");
    expect(loginSubmitButton).toBeInTheDocument();
    expect(window.location.pathname).toBe("/login");
  });

  it("Login form validation is correctly setup for incorrect email", async () => {
    const email = screen.getByTestId("email-input");
    const password = screen.getByTestId("password-input");
    const loginSubmitButton = screen.getByTestId("login-button");
    
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
    fireEvent.change(email, {
        target: { value: "taylor@example.com" },
    });
    fireEvent.change(password, {
        target: { value: "Taylor#1234" },
    });
    fireEvent.click(loginSubmitButton);
    const errorMessage = screen.getByTestId("error");
    expect(errorMessage.textContent).toBe("Invalid email");
  });

  it("Login form validation is correctly setup for incorrect password", async () => {
    const email = screen.getByTestId("email-input");
    const password = screen.getByTestId("password-input");
    const loginSubmitButton = screen.getByTestId("login-button");
    
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
    fireEvent.change(email, {
        target: { value: "jordan.lee@example.com" },
    });
    fireEvent.change(password, {
        target: { value: "pass@786" },
    });
    fireEvent.click(loginSubmitButton);
    const errorMessage = screen.getByTestId("error");
    expect(errorMessage.textContent).toBe("Invalid password");
  });

  it("Login form validation is correctly setup for empty fields", async () => {
    const email = screen.getByTestId("email-input");
    const password = screen.getByTestId("password-input");
    const loginSubmitButton = screen.getByTestId("login-button");
    
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
    fireEvent.change(email, {
        target: { value: "" },
    });
    fireEvent.change(password, {
        target: { value: "" },
    });
    fireEvent.click(loginSubmitButton);
    let errorMessage = screen.getByTestId("error");
    expect(errorMessage.textContent).toBe("Please enter both email and password");

    fireEvent.change(email, {
        target: { value: "test" },
    });
    fireEvent.change(password, {
        target: { value: "" },
    });
    fireEvent.click(loginSubmitButton);
    errorMessage = screen.getByTestId("error");
    expect(errorMessage.textContent).toBe("Please enter your password");

    fireEvent.change(email, {
        target: { value: "" },
    });
    fireEvent.change(password, {
        target: { value: "test" },
    });
    fireEvent.click(loginSubmitButton);
    errorMessage = screen.getByTestId("error");
    expect(errorMessage.textContent).toBe("Please enter your email");
  });

  it("Login form submission and navigation is correctly setup", async () => {
    const email = screen.getByTestId("email-input");
    const password = screen.getByTestId("password-input");
    const loginSubmitButton = screen.getByTestId("login-button");
    
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
    fireEvent.change(email, {
        target: { value: "casey.morgan@example.com" },
    });
    fireEvent.change(password, {
        target: { value: "myPassword456" },
    });
    fireEvent.click(loginSubmitButton);
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
    const toastNotification = await screen.findByText(
        "Casey Morgan is logged in"
    );
    expect(toastNotification).toBeVisible();
    expect(window.location.pathname).toBe("/login");
    await new Promise((resolve) => setTimeout(resolve, 4000));

    expect(window.location.pathname).toBe("/");
  });

  it("User modal state is correct after login", async () => {
    expect(window.location.pathname).toBe("/");
    let userButton = screen.getByTestId("user-btn");
    fireEvent.click(userButton);
    
    const loginButton = screen.queryByTestId("login-btn");
    expect(loginButton).toBeInTheDocument(); 

    fireEvent.click(loginButton);
    const email = screen.getByTestId("email-input");
    const password = screen.getByTestId("password-input");
    const loginSubmitButton = screen.getByTestId("login-button");

    fireEvent.change(email, { target: { value: "casey.morgan@example.com" } });
    fireEvent.change(password, { target: { value: "myPassword456" } });
    fireEvent.click(loginSubmitButton);

    const toastNotification = await screen.findByText("Casey Morgan is logged in");
    expect(toastNotification).toBeVisible();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    expect(window.location.pathname).toBe("/");

    userButton = screen.getByTestId("user-btn");
    fireEvent.click(userButton);

    expect(screen.queryByTestId("user-profile-btn")).toBeInTheDocument();
    expect(screen.queryByTestId("logout-btn")).toBeInTheDocument();
    expect(screen.queryByTestId("contact-us-btn")).toBeInTheDocument();
    expect(screen.queryByTestId("login-btn")).not.toBeInTheDocument();
  });

  it("User profile navigation and component is correct setup", async () => {
    expect(window.location.pathname).toBe("/");
    let userButton = screen.getByTestId("user-btn");
    fireEvent.click(userButton);
    
    const loginButton = screen.queryByTestId("login-btn");
    expect(loginButton).toBeInTheDocument(); 

    fireEvent.click(loginButton);
    const email = screen.getByTestId("email-input");
    const password = screen.getByTestId("password-input");
    const loginSubmitButton = screen.getByTestId("login-button");

    fireEvent.change(email, { target: { value: "casey.morgan@example.com" } });
    fireEvent.change(password, { target: { value: "myPassword456" } });
    fireEvent.click(loginSubmitButton);

    const toastNotification = await screen.findByText("Casey Morgan is logged in");
    expect(toastNotification).toBeVisible();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    expect(window.location.pathname).toBe("/");

    userButton = screen.getByTestId("user-btn");
    fireEvent.click(userButton);

    const userProfileButton = screen.queryByTestId("user-profile-btn");
    fireEvent.click(userProfileButton);
    expect(window.location.pathname).toBe("/user-profile");

    expect(screen.getByTestId("username").textContent).toBe("Casey Morgan");
    expect(screen.getByTestId("user-details").textContent).toContain("Email: casey.morgan@example.com");
    expect(screen.getByTestId("user-details").textContent).toContain("DOB: 1988-07-22");
    expect(screen.getByTestId("user-details").textContent).toContain("Address: 202 Oak Ave, Rivertown, USA");

    const backHomeButton = screen.getByTestId("home-btn");
    fireEvent.click(backHomeButton);
  });

  it("Logout button functions well", async () => {
    expect(window.location.pathname).toBe("/");
    let userButton = screen.getByTestId("user-btn");
    fireEvent.click(userButton);
    
    const loginButton = screen.queryByTestId("login-btn");
    expect(loginButton).toBeInTheDocument(); 

    fireEvent.click(loginButton);
    const email = screen.getByTestId("email-input");
    const password = screen.getByTestId("password-input");
    const loginSubmitButton = screen.getByTestId("login-button");

    fireEvent.change(email, { target: { value: "casey.morgan@example.com" } });
    fireEvent.change(password, { target: { value: "myPassword456" } });
    fireEvent.click(loginSubmitButton);

    const toastNotification = await screen.findByText("Casey Morgan is logged in");
    expect(toastNotification).toBeVisible();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    expect(window.location.pathname).toBe("/");

    userButton = screen.getByTestId("user-btn");
    fireEvent.click(userButton);

    expect(screen.queryByTestId("user-profile-btn")).toBeInTheDocument();
    expect(screen.queryByTestId("logout-btn")).toBeInTheDocument();
    expect(screen.queryByTestId("contact-us-btn")).toBeInTheDocument();
    expect(screen.queryByTestId("login-btn")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("logout-btn"));
    expect(screen.queryByTestId("user-profile-btn")).not.toBeInTheDocument();
    expect(screen.queryByTestId("logout-btn")).not.toBeInTheDocument();
  });
});
