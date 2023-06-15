import React from "react";
import { render, waitFor } from "@testing-library/react";
import Router, { BrowserRouter } from "react-router-dom";

import { podcastSelected } from "./data-generators/podcast-details-data-generator";
import PodcastDetails from "../../views/podcastDetails/PodcastDetails";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useMatches: jest.fn(),
}));

describe("Podcast Detail", () => {
  beforeEach(() => {
    jest.spyOn(Router, "useMatches").mockReturnValue([{ params: { id: 1 } }]);
  });
  test("Podcast detail screen should not render anything if no product info is fetched", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            contents: JSON.stringify({ resultCount: 0, results: [] }),
          }),
      })
    );
    // Act
    const { container } = render(
      <BrowserRouter>
        <PodcastDetails podcastSelected={null} setFetchingData={() => {}} />
      </BrowserRouter>
    );

    // Assertions
    await waitFor(() => {
      expect(container.querySelector(".podcast-details")).toBeFalsy();
    });
  });
  test("Podcast detail screen should render the podcast details description", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            contents: JSON.stringify({ resultCount: 0, results: [] }),
          }),
      })
    );

    // Act
    const { container } = render(
      <BrowserRouter>
        <PodcastDetails
          podcastSelected={podcastSelected}
          setFetchingData={() => {}}
        />
      </BrowserRouter>
    );

    // Assertions
    await waitFor(() => {
      expect(container.querySelector(".podcast-details")).toBeTruthy();
    });
  });
});
