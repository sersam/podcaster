const getPodcastsList = async () => {
  const responseApi = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  const response = await responseApi.json();

  return response;
};

const getPodcastDetils = async (podcastId) => {
  const responseApi = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    )}`
  );
  const podcastFound = await responseApi.json();

  return podcastFound;
};

export { getPodcastDetils, getPodcastsList };
