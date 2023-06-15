import React from "react";
import { useOutletContext } from "react-router-dom";

import Table from "./Table";
import "./episodes-list.css";

const EpisodesList = () => {
  const [podcastEpisodes] = useOutletContext();
  const episodes = podcastEpisodes?.results.slice(1);
  return (
    episodes?.length > 0 && (
      <div className="episodes-list">
        <div className="episodes-list-count">Episodes: {episodes.length}</div>
        <Table episodes={episodes} />
      </div>
    )
  );
};

export default EpisodesList;
