import React from "react";
import App from "../../App";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

global.console.warn = jest.fn();
describe("Like Property Feature Testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Like single property implementation is correct", async () => {
    const likeButton = screen.getAllByTestId("like-btn");
    fireEvent.click(likeButton[0]);

    const likeCount = screen.getByTestId("like-count");
    expect(likeCount.textContent).toBe("1");
  });

  it("Like multiple properties implementation is correct", async () => {
    const likeButton = screen.getAllByTestId("like-btn");
    fireEvent.click(likeButton[0]);
    fireEvent.click(likeButton[1]);
    fireEvent.click(likeButton[3]);
    fireEvent.click(likeButton[7]);

    const likeCount = screen.getByTestId("like-count");
    expect(likeCount.textContent).toBe("4");
  });

  it("Like and dislike multiple properties implementation is correct", async () => {
    const likeButton = screen.getAllByTestId("like-btn");
    fireEvent.click(likeButton[1]);
    fireEvent.click(likeButton[3]);
    fireEvent.click(likeButton[5]);
    fireEvent.click(likeButton[1]);
    fireEvent.click(likeButton[7]);
    fireEvent.click(likeButton[5]);

    const likeCount = screen.getByTestId("like-count");
    expect(likeCount.textContent).toBe("2");
  });
});
