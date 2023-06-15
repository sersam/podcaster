import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PodcastList from "./views/podcastList/PodcastList";
import Episode from "./views/episode/Episode";
import PodcastDetails from "./views/podcastDetails/PodcastDetails";
import EpisodesList from "./views/episodesList/EpisodesList";
import Layout from "./Layout";

import "./App.css";

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [podcastSelected, setPodcastSelected] = useState(null);
  const [fetchingData, setFetchingData] = useState(false);

  const router = createBrowserRouter([
    {
      element: (
        <Layout
          fetchingData={fetchingData}
          setFetchingData={setFetchingData}
          setPodcasts={setPodcasts}
        />
      ),
      children: [
        {
          path: "/",
          element: (
            <PodcastList
              podcasts={podcasts}
              setPodcastSelected={setPodcastSelected}
            />
          ),
        },
        {
          path: "/podcast",
          element: (
            <PodcastDetails
              podcastSelected={podcastSelected}
              setFetchingData={setFetchingData}
            />
          ),
          children: [
            { path: ":id", element: <EpisodesList /> },
            { path: ":id/episode/:episodeId", element: <Episode /> },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
