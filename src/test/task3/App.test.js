import React from "react";
import App from "../../App";
import { screen, render, cleanup, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

global.console.warn = jest.fn();
describe('Property Details Page Testing', () => {

  beforeEach(() => {
    render(
        <App />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('Routing is correctly handled', () => {
    expect(window.location.pathname).toBe('/');

    const viewBtn =  screen.getAllByTestId("view-details")[2];
    fireEvent.click(viewBtn);
    expect(window.location.pathname).toBe('/property-details/3');

    const property =  screen.getByTestId("property-name");
    expect(property.textContent).toBe("Beach House");
  }); 

  it('Data is correctly fetched', () => {
    const propertyName =  screen.getByTestId("property-name");
    const propertyDesc =  screen.getByTestId("property-desc");
    const propertyLocation =  screen.getByTestId("property-location");
    const propertyPrice =  screen.getByTestId("property-price");
    const propertyAmenities =  screen.getByTestId("property-amenities");
    const propertyRating =  screen.getByTestId("property-rating");

    expect(propertyName.textContent).toBe("Beach House");
    expect(propertyDesc.textContent).toBe("A beautiful beach house with ocean views.");
    expect(propertyLocation.textContent).toBe("Location: Coastal City, USA");
    expect(propertyPrice.textContent).toBe("Price: $200/night");
    expect(propertyAmenities.textContent).toBe("Amenities: Swimming Pool, Beach Access, Gym");
    expect(propertyRating.textContent).toBe("Rating: 3.8 Stars");
    expect(screen.queryByTestId("apply-discount")).toBeInTheDocument();
  }); 

  it('Modal Validation is correctly handled 1', () => {
    const discountBtn = screen.getByTestId("apply-discount");
    fireEvent.click(discountBtn);

    const modalInput = screen.getByTestId("modal-input");
    fireEvent.change(modalInput, {
        target: { value: "off" },
    });
    const applyBtn = screen.getByTestId("modal-apply");
    fireEvent.click(applyBtn);

    expect(screen.queryByTestId("modal-apply")).toBeInTheDocument();
    const errorMessage = screen.queryByTestId("error");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe("Incorrect coupon");
  });
  
  it('Modal Validation is correctly handled 2', () => {
    const discountBtn = screen.getByTestId("apply-discount");
    fireEvent.click(discountBtn);

    const modalInput = screen.getByTestId("modal-input");
    fireEvent.change(modalInput, {
        target: { value: "" },
    });
    const applyBtn = screen.getByTestId("modal-apply");
    fireEvent.click(applyBtn);

    expect(screen.queryByTestId("modal-apply")).toBeInTheDocument();
    const errorMessage = screen.queryByTestId("error");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe("Empty input field");
  }); 

  it('Apply correct discount coupon condition is properly handled', () => {
    let discountPrice = screen.queryByTestId("property-disc-price");
    expect(discountPrice).not.toBeInTheDocument();
    const discountBtn = screen.getByTestId("apply-discount");
    fireEvent.click(discountBtn);

    const modalInput = screen.getByTestId("modal-input");
    fireEvent.change(modalInput, {
        target: { value: "20off" },
    });
    const applyBtn = screen.getByTestId("modal-apply");
    fireEvent.click(applyBtn);

    expect(screen.queryByTestId("modal-apply")).not.toBeInTheDocument();
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
    discountPrice = screen.getByTestId("property-disc-price");
    expect(discountPrice.textContent).toBe("Discounted Price: $160/night");
  }); 

});