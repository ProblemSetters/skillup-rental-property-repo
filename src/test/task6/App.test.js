import React from "react";
import App from "../../App";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

global.console.warn = jest.fn();
describe("Contact Us Page Testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it("User modal is opening and routing is correctly setup", async () => {
    expect(window.location.pathname).toBe("/");
    const userButton = screen.getByTestId("user-btn");
    fireEvent.click(userButton);

    const contactButton = screen.queryByTestId("contact-us-btn");
    expect(contactButton).toBeInTheDocument();
    
    fireEvent.click(contactButton);
    const contactUsPage = screen.queryByTestId("contact-us-page");
    expect(contactUsPage).toBeInTheDocument();
    expect(window.location.pathname).toBe("/contact-us");
  });
});
