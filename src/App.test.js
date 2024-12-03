import React from "react";
import App from "./App";
import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(() => {
  cleanup();
});

it("Sample Test", () => {
  throw new Error("Create Tests");
});
