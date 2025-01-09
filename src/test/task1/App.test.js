import React from "react";
import App from "../../App";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

global.console.warn = jest.fn();
describe("Book Property Feature Testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Book Property Event is correctly handled", async () => {
    const properties = screen.getAllByTestId("property-img");
    fireEvent.click(properties[0]);

    const bookPropertyBtn = screen.getByTestId("book-property");
    fireEvent.click(bookPropertyBtn);
    const toastNotification = await screen.findByText(
      "Your property has been booked successfully!"
    );
    expect(toastNotification).toBeVisible();

    const propertyText = screen.getByText("Cozy Cottage");
    expect(propertyText).toBeInTheDocument();
  });
});
