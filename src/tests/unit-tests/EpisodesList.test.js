import React from "react";
import { render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import {
  episodes as mockEpisodes,
  emptyEpisodes as mockEmptyEpisodes,
} from "./data-generators/episodes-list-data-generator";

import EpisodesList from "../../views/episodesList/EpisodesList";

import * as rrd from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useOutletContext: jest.fn(),
}));

describe("EpisodesList", () => {
  test("EpisodesList should not render the episodes table if not episodes are available", () => {
    // Arrange
    rrd.useOutletContext.mockReturnValue([mockEmptyEpisodes]);
    // Act
    const { container } = render(
      <BrowserRouter>
        <EpisodesList />
      </BrowserRouter>
    );

    // Assertions
    expect(container.querySelector(".episodes-list")).toBeFalsy();
  });

  test("EpisodesList should render the episodes number of episodes available", () => {
    // Arrange
    rrd.useOutletContext.mockReturnValue([mockEpisodes]);
    const numberOfEpisodes = `Episodes: ${mockEpisodes.resultCount - 1}`;
    // Act
    const { container } = render(
      <BrowserRouter>
        <EpisodesList />
      </BrowserRouter>
    );

    const { getByText } = within(
      container.querySelector(".episodes-list-count")
    );

    // Assertions
    expect(getByText(numberOfEpisodes)).toBeTruthy();
    expect(container.querySelector(".episodes-list-table")).toBeTruthy();
  });
});
