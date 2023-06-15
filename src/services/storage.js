import { isJSON } from "./util";

const storeData = (key, value) => {
  localStorage.setItem(key, value);
};

const getDataFromStorage = (key) => {
  const itemStored = localStorage.getItem(key);

  return isJSON(itemStored) ? JSON.parse(itemStored) : itemStored;
};

export { storeData, getDataFromStorage };
