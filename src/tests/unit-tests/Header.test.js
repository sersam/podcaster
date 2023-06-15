import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../views/header/Header";

describe("Header", () => {
  test("Header should render the title", () => {
    // Arrange
    // Act
    const { container } = render(
      <BrowserRouter>
        <Header fetchingData={false} />
      </BrowserRouter>
    );

    // Assertions
    expect(container.querySelector(".header")).toBeTruthy();
    expect(container.querySelector(".header-title")).toBeTruthy();
    expect(container.querySelector(".MuiCircularProgress-root")).toBeFalsy();
  });
  test("Header shows the spinner while fetchingData is true", () => {
    // Arrange
    // Act
    const { container } = render(
      <BrowserRouter>
        <Header fetchingData />
      </BrowserRouter>
    );

    // Assertions
    expect(container.querySelector(".MuiCircularProgress-root")).toBeTruthy();
  });
});
