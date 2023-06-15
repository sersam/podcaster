import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Episode from "../../views/episode/Episode";
import { episodes } from "./data-generators/episode-details-data-generator";

import * as rrd from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useOutletContext: jest.fn(),
  useMatches: jest.fn(),
}));

describe("Episode", () => {
  test("Episode should not render if no episode found", () => {
    // Arrange
    rrd.useOutletContext.mockReturnValue([episodes]);
    rrd.useMatches.mockReturnValue([{ params: { episodeId: 0 } }]);
    // Act
    const { container } = render(
      <BrowserRouter>
        <Episode />
      </BrowserRouter>
    );

    // Assertions
    expect(container.querySelector(".episode-details")).toBeFalsy();
  });
  test("Episode shows the title, description and mp3 player when a correct episode is found", () => {
    // Arrange
    rrd.useOutletContext.mockReturnValue([episodes]);
    rrd.useMatches.mockReturnValue([{ params: { episodeId: 1000605224134 } }]);

    // Act
    const { container } = render(
      <BrowserRouter>
        <Episode />
      </BrowserRouter>
    );

    // Assertions
    expect(container.querySelector(".episode-details")).toBeTruthy();
    expect(container.querySelector(".episode-details-title")).toBeTruthy();
    expect(
      container.querySelector(".episode-details-description")
    ).toBeTruthy();
    expect(container.querySelector(".episode-details-player")).toBeTruthy();
  });
});
