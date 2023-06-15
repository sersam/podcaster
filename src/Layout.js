import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./views/header/Header";
import { getPodcastsList } from "./services/podcasts-api";
import { getDataFromStorage, storeData } from "./services/storage";
import { STORE_KEYS } from "./constants";

function Layout({ fetchingData, setFetchingData, setPodcasts }) {
  useEffect(() => {
    const fetchData = async () => {
      setFetchingData(true);
      const jsonData = await getPodcastsList();
      setPodcasts(jsonData.feed.entry);
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 1);
      storeData(STORE_KEYS.EXPIRATION_TIME, currentDate);
      storeData(STORE_KEYS.PODCASTS, JSON.stringify(jsonData.feed.entry));
      setFetchingData(false);

      return jsonData;
    };

    const dataExpirationTime = getDataFromStorage(STORE_KEYS.EXPIRATION_TIME);
    if (
      dataExpirationTime == null ||
      new Date(dataExpirationTime) < new Date()
    ) {
      fetchData();
    } else {
      const cachePodcasts = getDataFromStorage(STORE_KEYS.PODCASTS);
      setPodcasts(cachePodcasts);
    }
  }, []);
  return (
    <React.Fragment>
      <Header fetchingData={fetchingData} />
      <Outlet />
    </React.Fragment>
  );
}

export default Layout;
