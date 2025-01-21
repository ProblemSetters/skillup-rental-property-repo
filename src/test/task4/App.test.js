import React from "react";
import App from "../../App";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

global.console.warn = jest.fn();
describe("Apply Discount Modal Testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Modal Validation is correctly handled - 1", () => {
    const properties = screen.getAllByTestId("property-img");
    fireEvent.click(properties[1]);

    const discountBtn = screen.getByTestId("apply-discount");
    fireEvent.click(discountBtn);

    const modalInput = screen.getByTestId("modal-input");
    fireEvent.change(modalInput, {
      target: { value: "off" },
    });
    const applyBtn = screen.getByTestId("modal-apply");
    fireEvent.click(applyBtn);

    expect(screen.queryByTestId("modal-apply")).toBeInTheDocument();
    const errorMessage = screen.queryByTestId("modal-error");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe("Incorrect coupon");
  });

  it("Modal Validation is correctly handled - 2", () => {
    const discountBtn = screen.getByTestId("apply-discount");
    fireEvent.click(discountBtn);

    const modalInput = screen.getByTestId("modal-input");
    fireEvent.change(modalInput, {
      target: { value: "" },
    });
    const applyBtn = screen.getByTestId("modal-apply");
    fireEvent.click(applyBtn);

    expect(screen.queryByTestId("modal-apply")).toBeInTheDocument();
    const errorMessage = screen.queryByTestId("modal-error");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe("Empty input field");
  });

  it("Correct Discount Codes are properly handled - 1", () => {
    let discountPrice = screen.queryByTestId("property-disc-price");
    expect(discountPrice).not.toBeInTheDocument();

    const realPrice = screen.queryByTestId("property-price");
    expect(realPrice).toBeInTheDocument();
    expect(realPrice.textContent).toBe("$150/night");

    const discountBtn = screen.getByTestId("apply-discount");
    fireEvent.click(discountBtn);

    const modalInput = screen.getByTestId("modal-input");
    fireEvent.change(modalInput, {
      target: { value: "10off" },
    });
    const applyBtn = screen.getByTestId("modal-apply");
    fireEvent.click(applyBtn);

    expect(screen.queryByTestId("modal-apply")).not.toBeInTheDocument();
    expect(screen.queryByTestId("modal-error")).not.toBeInTheDocument();
    discountPrice = screen.getByTestId("property-disc-price");
    expect(discountPrice.textContent).toBe("Discounted Price: $135/night");
  });

  it("Correct Discount Codes are properly handled - 2", () => {
    let discountPrice = screen.queryByTestId("property-disc-price");
    expect(discountPrice).not.toBeInTheDocument();

    const realPrice = screen.queryByTestId("property-price");
    expect(realPrice).toBeInTheDocument();
    expect(realPrice.textContent).toBe("$150/night");

    const discountBtn = screen.getByTestId("apply-discount");
    fireEvent.click(discountBtn);

    const modalInput = screen.getByTestId("modal-input");
    fireEvent.change(modalInput, {
      target: { value: "20OFF" },
    });
    const applyBtn = screen.getByTestId("modal-apply");
    fireEvent.click(applyBtn);

    expect(screen.queryByTestId("modal-apply")).not.toBeInTheDocument();
    expect(screen.queryByTestId("modal-error")).not.toBeInTheDocument();
    discountPrice = screen.getByTestId("property-disc-price");
    expect(discountPrice.textContent).toBe("Discounted Price: $120/night");
  });

  it("Correct Discount Codes are properly handled - 3", () => {
    let discountPrice = screen.queryByTestId("property-disc-price");
    expect(discountPrice).not.toBeInTheDocument();

    const realPrice = screen.queryByTestId("property-price");
    expect(realPrice).toBeInTheDocument();
    expect(realPrice.textContent).toBe("$150/night");

    const discountBtn = screen.getByTestId("apply-discount");
    fireEvent.click(discountBtn);

    const modalInput = screen.getByTestId("modal-input");
    fireEvent.change(modalInput, {
      target: { value: "30off" },
    });
    const applyBtn = screen.getByTestId("modal-apply");
    fireEvent.click(applyBtn);

    expect(screen.queryByTestId("modal-apply")).not.toBeInTheDocument();
    expect(screen.queryByTestId("modal-error")).not.toBeInTheDocument();
    discountPrice = screen.getByTestId("property-disc-price");
    expect(discountPrice.textContent).toBe("Discounted Price: $105/night");
  });
});
