import React, { useState, useEffect } from "react";
import { useMatches, Outlet } from "react-router-dom";

import "./podcast-details.css";
import SideBar from "./SideBar";
import {
  getPodcastDetils,
  getPodcastEpisodes,
} from "./data-handling/data-fetching";

const PodcastDetails = ({ podcastSelected, setFetchingData }) => {
  const [podcastDetails, setPodcastDetails] = useState(null);
  const [podcastEpisodes, setPodcastEpisodes] = useState(null);
  const [matches] = useMatches();

  useEffect(() => {
    const podcastId = matches.params.id;
    getPodcastDetils(podcastId, podcastSelected, setPodcastDetails);
    getPodcastEpisodes(podcastId, setFetchingData, setPodcastEpisodes);
  }, []);

  if (podcastDetails != null) {
    return (
      <div className="podcast-details">
        <SideBar podcastDetails={podcastDetails} />
        <Outlet context={[podcastEpisodes, podcastDetails]} />
      </div>
    );
  } else {
    return null;
  }
};

export default PodcastDetails;
