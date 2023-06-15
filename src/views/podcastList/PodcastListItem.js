import React from "react";
import { useNavigate } from "react-router-dom";

const messages = {
  no_image_available: "No image available",
  author_title: "Author: ",
};

const handleOnClick = (podcastSelected, setPodcastSelected, navigate) => () => {
  setPodcastSelected(podcastSelected);
  return navigate(`/podcast/${podcastSelected.id}`);
};

const PodcastListItem = ({ podcast, setPodcastSelected }) => {
  const navigate = useNavigate();
  const {
    id: {
      attributes: { "im:id": id },
    },
    "im:name": name,
    "im:artist": artist,
    "im:image": images,
    summary,
  } = podcast;
  return (
    <div
      id={id}
      key={id}
      className="podcast-list-item"
      onClick={handleOnClick(
        {
          id,
          name: name.label,
          artist: artist.label,
          description: summary.label,
          image: images[images.length - 1].label,
        },
        setPodcastSelected,
        navigate
      )}
    >
      <img
        src={images[images.length - 1].label}
        alt={messages.no_image_available}
      />
      <div className="podcast-list-item-info">
        <div className="podcast-list-item-name">{name.label}</div>
        <div className="podcast-list-item-author">
          {messages.author_title} {artist.label}
        </div>
      </div>
    </div>
  );
};

export default PodcastListItem;
