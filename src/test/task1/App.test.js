import React from "react";
import App from "../../App";
import { screen, render, cleanup, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import data from '../../data.json';

global.console.warn = jest.fn();
describe('Search Bar Component Testing', () => {

  beforeEach(() => {
    render(
        <App />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('Properties are correctly filtered based on the search query', () => {
    const searchBar = screen.getByTestId("search-bar");
	fireEvent.change(searchBar, {
			target: { value: "c" },
	});
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(4);
    expect(properties[0].textContent).toBe("Cozy Cottage");
    expect(properties[1].textContent).toBe("Beach House");
    expect(properties[2].textContent).toBe("Charming Bungalow");
    expect(properties[3].textContent).toBe("Rustic Cabin");

    fireEvent.change(searchBar, {
        target: { value: "cH" },
    });
    properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(2);
    expect(properties[0].textContent).toBe("Beach House");
    expect(properties[1].textContent).toBe("Charming Bungalow");
  });

  it('No properties are shown and conditional message is appearing correctly on incorrect search query', () => {
    const searchBar = screen.getByTestId("search-bar");
	fireEvent.change(searchBar, {
			target: { value: "Pr" },
	});
    const properties = screen.queryAllByTestId("property-name");
    expect(properties.length).toBe(0);
    expect(screen.getByTestId("conditional-message")).toBeInTheDocument();
  });

  it('Properties are correctly filtered when the search query is removed', async () => {
    const searchBar = screen.getByTestId("search-bar");
	fireEvent.change(searchBar, {
			target: { value: "P" },
	});
    let properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(2);
    expect(properties[0].textContent).toBe("Modern Apartment");
    expect(properties[1].textContent).toBe("Penthouse Suite");

    fireEvent.change(searchBar, {
        target: { value: "" },
    });
    properties = screen.getAllByTestId("property-name");
    expect(properties.length).toBe(10);
    properties.forEach((property, index) => {
      expect(property.textContent).toBe(data.properties[index].name);
    });
  });
});