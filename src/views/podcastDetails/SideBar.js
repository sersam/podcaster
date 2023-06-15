import React from "react";
import { useNavigate } from "react-router-dom";

const messages = {
  no_image_available: "No image available",
  description_label: "Description: ",
  artist_by: "by ",
};

const SideBar = ({ podcastDetails }) => {
  const navigate = useNavigate();

  const {
    id: {
      attributes: { "im:id": id },
    },
    "im:name": name,
    "im:artist": artist,
    "im:image": images,
    summary,
  } = podcastDetails;

  return (
    <div className="podcast-details-side-bar">
      <div
        className="podcast-details-main-info"
        onClick={() => navigate(`/podcast/${id}`)}
      >
        <img
          src={images[images.length - 1].label}
          alt={messages.no_image_available}
        />

        <div className="podcast-details-title">{name.label}</div>
        <div className="podcast-details-artist">
          {messages.artist_by}
          {artist.label}
        </div>
      </div>
      <div>
        <div className="podcast-details-description-label">
          {messages.description_label}
        </div>
        <div className="podcast-details-description-info">{summary.label}</div>
      </div>
    </div>
  );
};

export default SideBar;
