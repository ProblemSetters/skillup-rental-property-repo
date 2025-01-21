import React from "react";
import App from "../../App";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import data from "../../data/properties.json";

global.console.warn = jest.fn();
describe("Filter Component Testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Price filter is working correctly", () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);

    fireEvent.change(screen.getByTestId("price-input-min"), {
      target: { value: "100" },
    });
    fireEvent.change(screen.getByTestId("price-input-max"), {
      target: { value: "150" },
    });

    const applyBtn = screen.getByTestId("apply-button");
    fireEvent.click(applyBtn);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(4);
    expect(properties[0].textContent).toBe("Cozy Cottage");
    expect(properties[1].textContent).toBe("Modern Apartment");
    expect(properties[2].textContent).toBe("Charming Bungalow");
    expect(properties[3].textContent).toBe("Downtown Studio");
  });

  it("Rating filter is working correctly", () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);

    const ratingOptions = screen.getAllByTestId("rating-filter");
    const targetOption = ratingOptions.find(
      (option) => option.textContent === "2 - 3 Stars"
    );
    fireEvent.click(targetOption);

    const applyBtn = screen.getByTestId("apply-button");
    fireEvent.click(applyBtn);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(2);
    expect(properties[0].textContent).toBe("Charming Bungalow");
    expect(properties[1].textContent).toBe("Rustic Cabin");
  });

  it("Five amenities are shown by default and increases on button click correctly", () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);

    let amenityOptions = screen.getAllByTestId("amenities-filter");
    expect(amenityOptions.length).toBe(5);

    const moreAmenitiesButton = screen.getByTestId("more-amenities-btn");
    fireEvent.click(moreAmenitiesButton);
    amenityOptions = screen.getAllByTestId("amenities-filter");
    expect(amenityOptions.length).toBe(8);
  });

  it("Amenities filter is working correctly", () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);

    const amenityOptions = screen.getAllByTestId("amenities-filter");
    fireEvent.click(amenityOptions[0]);
    fireEvent.click(amenityOptions[1]);

    const applyBtn = screen.getByTestId("apply-button");
    fireEvent.click(applyBtn);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(3);
    expect(properties[0].textContent).toBe("Cozy Cottage");
    expect(properties[1].textContent).toBe("Luxury Villa");
    expect(properties[2].textContent).toBe("Penthouse Suite");
  });

  it("Price and rating filter is working together correctly", () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);

    fireEvent.change(screen.getByTestId("price-input-min"), {
      target: { value: "120" },
    });
    fireEvent.change(screen.getByTestId("price-input-max"), {
      target: { value: "300" },
    });
    const ratingOptions = screen.getAllByTestId("rating-filter");
    const targetOption = ratingOptions.find(
      (option) => option.textContent === "3 - 4 Stars"
    );
    fireEvent.click(targetOption);

    const applyBtn = screen.getByTestId("apply-button");
    fireEvent.click(applyBtn);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(3);
    expect(properties[0].textContent).toBe("Cozy Cottage");
    expect(properties[1].textContent).toBe("Beach House");
    expect(properties[2].textContent).toBe("Family Home");
  });

  it("Price and amenities filter is working together correctly", () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);

    fireEvent.change(screen.getByTestId("price-input-max"), {
      target: { value: "160" },
    });
    const amenityOptions = screen.getAllByTestId("amenities-filter");
    fireEvent.click(amenityOptions[2]);

    const applyBtn = screen.getByTestId("apply-button");
    fireEvent.click(applyBtn);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(2);
    expect(properties[0].textContent).toBe("Modern Apartment");
    expect(properties[1].textContent).toBe("Charming Bungalow");
  });

  it("Rating and amenities filter is working together correctly", () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);

    const ratingOptions = screen.getAllByTestId("rating-filter");
    const targetOption = ratingOptions.find(
      (option) => option.textContent === "2 - 3 Stars"
    );
    fireEvent.click(targetOption);

    const amenityOptions = screen.getAllByTestId("amenities-filter");
    fireEvent.click(amenityOptions[2]);

    const applyBtn = screen.getByTestId("apply-button");
    fireEvent.click(applyBtn);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(1);
    expect(properties[0].textContent).toBe("Charming Bungalow");
  });

  it("All filters combined are working correctly", () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);

    fireEvent.change(screen.getByTestId("price-input-min"), {
      target: { value: "160" },
    });

    const ratingOptions = screen.getAllByTestId("rating-filter");
    const targetOption = ratingOptions.find(
      (option) => option.textContent === "4+ Stars"
    );
    fireEvent.click(targetOption);
    const amenityOptions = screen.getAllByTestId("amenities-filter");
    fireEvent.click(amenityOptions[3]);

    const applyBtn = screen.getByTestId("apply-button");
    fireEvent.click(applyBtn);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(2);
    expect(properties[0].textContent).toBe("Penthouse Suite");
    expect(properties[1].textContent).toBe("Urban Loft");
  });

  it("Clear button is working correctly", () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    let filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);

    fireEvent.change(screen.getByTestId("price-input-min"), {
      target: { value: "160" },
    });

    const ratingOptions = screen.getAllByTestId("rating-filter");
    const targetOption = ratingOptions.find(
      (option) => option.textContent === "4+ Stars"
    );
    fireEvent.click(targetOption);
    const amenityOptions = screen.getAllByTestId("amenities-filter");
    fireEvent.click(amenityOptions[3]);

    const applyBtn = screen.getByTestId("apply-button");
    fireEvent.click(applyBtn);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(2);
    expect(properties[0].textContent).toBe("Penthouse Suite");
    expect(properties[1].textContent).toBe("Urban Loft");

    filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);
    const clearBtn = screen.getByTestId("clear-button");
    fireEvent.click(clearBtn);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(10);
    properties.forEach((property, index) => {
      expect(property.textContent).toBe(data.properties[index].name);
    });
  });
});
