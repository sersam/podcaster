import React from "react";
import { useOutletContext, useMatches } from "react-router-dom";

import "./episode-details.css";

const Episode = () => {
  const [matches] = useMatches();
  const [podcastDetails] = useOutletContext();
  const episodeId = Number(matches.params.episodeId);

  const episodeSelected = podcastDetails.results.find(
    (episode) => episode.trackId === episodeId
  );

  return (
    episodeSelected != null && (
      <div className="episode-details">
        <div className="episode-details-title">{episodeSelected.trackName}</div>
        <div className="episode-details-description">
          {episodeSelected.description}
        </div>

        <div className="episode-details-player">
          <audio controls>
            <source src={episodeSelected.episodeUrl} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    )
  );
};

export default Episode;
