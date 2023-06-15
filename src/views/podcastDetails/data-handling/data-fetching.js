import { STORE_KEYS } from "../../../constants";
import { getPodcastDetils as getPodcastDetailsAPI } from "../../../services/podcasts-api";
import { getDataFromStorage, storeData } from "../../../services/storage";

const fetchData = async (podcastId, setFetchingData, setPodcastEpisodes) => {
  setFetchingData(true);
  const podcastFound = await getPodcastDetailsAPI(podcastId);
  setPodcastEpisodes(JSON.parse(podcastFound.contents));
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  storeData(`${podcastId}-${STORE_KEYS.EXPIRATION_TIME}`, currentDate);
  storeData(`${podcastId}-${STORE_KEYS.EPISODES}`, podcastFound.contents);
  setFetchingData(false);

  return podcastFound;
};

const getPodcastDetils = (podcastId, podcastSelected, setPodcastDetails) => {
  const cachePodcasts = getDataFromStorage(STORE_KEYS.PODCASTS);
  if (cachePodcasts != null) {
    const cachePodcast = cachePodcasts.find(
      ({
        id: {
          attributes: { "im:id": cachePodcastId },
        },
      }) => cachePodcastId === podcastId
    );
    setPodcastDetails(cachePodcast);
    storeData(podcastId, JSON.stringify(cachePodcast));
  } else if (podcastSelected != null) {
    setPodcastDetails(podcastSelected);
    storeData(podcastId, JSON.stringify(podcastSelected));
  }
};

const getPodcastEpisodes = (podcastId, setFetchingData, setPodcastEpisodes) => {
  const cachePodcastDetails = getDataFromStorage(
    `${podcastId}-${STORE_KEYS.EPISODES}`
  );
  const expirationTimeDetails = getDataFromStorage(
    `${podcastId}-${STORE_KEYS.EXPIRATION_TIME}`
  );
  if (
    expirationTimeDetails != null ||
    (cachePodcastDetails != null &&
      new Date(expirationTimeDetails) > new Date())
  ) {
    const cachePodcastEpisodes = getDataFromStorage(
      `${podcastId}-${STORE_KEYS.EPISODES}`
    );
    setPodcastEpisodes(cachePodcastEpisodes);
  } else {
    fetchData(podcastId, setFetchingData, setPodcastEpisodes);
  }
};

export { getPodcastDetils, getPodcastEpisodes };
