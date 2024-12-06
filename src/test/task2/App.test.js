import React from "react";
import App from "../../App";
import { screen, render, cleanup, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import data from '../../data.json';

global.console.warn = jest.fn();
describe('Filter Component Testing', () => {

  beforeEach(() => {
    render(
        <App />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('Price sorting button is working correctly', () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);
    properties.forEach((property, index) => {
        expect(property.textContent).toBe(data.properties[index].name);
    });

    const priceBtn = screen.getByTestId("price-button");
    fireEvent.click(priceBtn);
    properties = screen.getAllByTestId("property-name");
    expect(properties[0].textContent).toBe("Rustic Cabin");
    expect(properties[1].textContent).toBe("Charming Bungalow");
    expect(properties[2].textContent).toBe("Cozy Cottage");
    expect(properties[3].textContent).toBe("Downtown Studio");
    expect(properties[4].textContent).toBe("Modern Apartment");
    expect(properties[5].textContent).toBe("Urban Loft");
    expect(properties[6].textContent).toBe("Beach House");
    expect(properties[7].textContent).toBe("Family Home");
    expect(properties[8].textContent).toBe("Luxury Villa");
    expect(properties[9].textContent).toBe("Penthouse Suite");

    fireEvent.click(priceBtn);
    properties = screen.getAllByTestId("property-name");
    expect(properties[9].textContent).toBe("Rustic Cabin");
    expect(properties[8].textContent).toBe("Charming Bungalow");
    expect(properties[7].textContent).toBe("Cozy Cottage");
    expect(properties[6].textContent).toBe("Downtown Studio");
    expect(properties[5].textContent).toBe("Modern Apartment");
    expect(properties[4].textContent).toBe("Urban Loft");
    expect(properties[3].textContent).toBe("Beach House");
    expect(properties[2].textContent).toBe("Family Home");
    expect(properties[1].textContent).toBe("Luxury Villa");
    expect(properties[0].textContent).toBe("Penthouse Suite");
  }); 

  it('Price filter is working correctly', () => {
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
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(4);
    expect(properties[0].textContent).toBe("Cozy Cottage");
    expect(properties[1].textContent).toBe("Modern Apartment");
    expect(properties[2].textContent).toBe("Charming Bungalow");
    expect(properties[3].textContent).toBe("Downtown Studio");
  }); 

  it('Rating filter is working correctly', () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);
    
    const ratingOptions = screen.getAllByTestId("rating-filter");
    const targetOption = ratingOptions.find(option => option.value === "2-3");
    fireEvent.click(targetOption);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(2);
    expect(properties[0].textContent).toBe("Charming Bungalow");
    expect(properties[1].textContent).toBe("Rustic Cabin");
  }); 

  it('Amenities filter is working correctly', () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);

    const amenitiesCheckboxes = screen.getAllByTestId("amenities-filter");
    fireEvent.click(amenitiesCheckboxes[0]); 
    fireEvent.click(amenitiesCheckboxes[1]);

    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(3);
    expect(properties[0].textContent).toBe("Cozy Cottage");
    expect(properties[1].textContent).toBe("Luxury Villa");
    expect(properties[2].textContent).toBe("Penthouse Suite");
  }); 

  it('Price and rating filter is working together correctly', () => {
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
    const targetOption = ratingOptions.find(option => option.value === "3-4");
    fireEvent.click(targetOption);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(3);
    expect(properties[0].textContent).toBe("Cozy Cottage");
    expect(properties[1].textContent).toBe("Beach House");
    expect(properties[2].textContent).toBe("Family Home");
  });

  it('Price and amenities filter is working together correctly', () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);
    
    fireEvent.change(screen.getByTestId("price-input-max"), {
        target: { value: "160" },
    });
    const amenitiesCheckboxes = screen.getAllByTestId("amenities-filter");
    fireEvent.click(amenitiesCheckboxes[2]); 
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(2);
    expect(properties[0].textContent).toBe("Modern Apartment");
    expect(properties[1].textContent).toBe("Charming Bungalow");
  }); 

  it('Rating and amenities filter is working together correctly', () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);
    
    const ratingOptions = screen.getAllByTestId("rating-filter");
    const targetOption = ratingOptions.find(option => option.value === "2-3");
    fireEvent.click(targetOption);

    const amenitiesCheckboxes = screen.getAllByTestId("amenities-filter");
    fireEvent.click(amenitiesCheckboxes[2]); 
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(1);
    expect(properties[0].textContent).toBe("Charming Bungalow");
  }); 

  it('All filters combined are working correctly', () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);
    
    fireEvent.change(screen.getByTestId("price-input-min"), {
        target: { value: "160" },
    });

    const ratingOptions = screen.getAllByTestId("rating-filter");
    const targetOption = ratingOptions.find(option => option.value === "4-");
    fireEvent.click(targetOption);
    const amenitiesCheckboxes = screen.getAllByTestId("amenities-filter");
    fireEvent.click(amenitiesCheckboxes[3]); 

    const priceBtn = screen.getByTestId("price-button");
    fireEvent.click(priceBtn);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(2);
    expect(properties[0].textContent).toBe("Urban Loft");
    expect(properties[1].textContent).toBe("Penthouse Suite");
  }); 

  it('Clear button is working correctly', () => {
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);

    const filterBtn = screen.getByTestId("filter-button");
    fireEvent.click(filterBtn);
    
    fireEvent.change(screen.getByTestId("price-input-min"), {
        target: { value: "160" },
    });

    const ratingOptions = screen.getAllByTestId("rating-filter");
    const targetOption = ratingOptions.find(option => option.value === "4-");
    fireEvent.click(targetOption);
    const amenitiesCheckboxes = screen.getAllByTestId("amenities-filter");
    fireEvent.click(amenitiesCheckboxes[3]); 

    const priceBtn = screen.getByTestId("price-button");
    fireEvent.click(priceBtn);
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(2);
    expect(properties[0].textContent).toBe("Urban Loft");
    expect(properties[1].textContent).toBe("Penthouse Suite");

    const clearBtn = screen.getByTestId("clear-button");
    fireEvent.click(clearBtn)
    properties = screen.getAllByTestId("property-name");

    expect(properties.length).toBe(10);
    properties.forEach((property, index) => {
        expect(property.textContent).toBe(data.properties[index].name);
    });
  }); 
});