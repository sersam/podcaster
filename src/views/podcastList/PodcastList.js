import React, { useState, useEffect } from "react";
import PodcastListItem from "./PodcastListItem";
import Badge from "@mui/material/Badge";

import "./podcast-list.css";

export default function PodcastList({ podcasts, setPodcastSelected }) {
  const [searchValue, setSearchValue] = useState("");
  const [podcastsFiltered, setPodcastsFiltered] = useState([]);

  useEffect(() => {
    setPodcastsFiltered(podcasts);
  }, [podcasts]);

  useEffect(() => {
    const podcastSearch = podcasts.filter(
      ({ "im:name": name, "im:artist": artist }) =>
        name.label.toLocaleLowerCase().includes(searchValue) ||
        artist.label.toLocaleLowerCase().includes(searchValue)
    );
    setPodcastsFiltered(podcastSearch);
  }, [searchValue]);

  return (
    <div className="podcast-list-view">
      <div className="search-field">
        <Badge
          className="number-of-podcasts"
          badgeContent={podcastsFiltered.length}
          color="primary"
        />
        <input
          className="search-input"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
      <div className="podcast-list">
        {podcastsFiltered.map((podcast) => {
          const { "im:id": podcastId } = podcast.id.attributes;
          return (
            <PodcastListItem
              key={podcastId}
              podcast={podcast}
              setPodcastSelected={setPodcastSelected}
            />
          );
        })}
      </div>
    </div>
  );
}
