import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import PodcastList from "../../views/podcastList/PodcastList";
import { podcasts } from "./data-generators/podcast-list-data-generator";

describe("Podcast List", () => {
  test("Podcast list screen should render only the search input field when no podcasts are available", () => {
    // Arrange
    const podcastList = [];
    // Act
    const { container } = render(
      <BrowserRouter>
        <PodcastList podcasts={podcastList} setPodcastSelected={() => {}} />
      </BrowserRouter>
    );

    // Assertions
    expect(container.querySelector(".search-field")).toBeTruthy();
    expect(container.querySelector(".podcast-list-item")).toBeFalsy();
  });
  test("Podcast list screen should render the podcast list showing the title and author", () => {
    // Arrange
    // Act
    const { container } = render(
      <BrowserRouter>
        <PodcastList podcasts={podcasts} />
      </BrowserRouter>
    );

    // Assertions
    expect(container.querySelector(".search-field")).toBeTruthy();
    expect(container.querySelector(".podcast-list-item")).toBeTruthy();
    expect(container.querySelector(".podcast-list-item-name")).toBeTruthy();
    expect(screen.getByText("test 1")).toBeTruthy();
    expect(screen.getByText("test 2")).toBeTruthy();
  });
});
