import axios from "axios";

const baseURLs = {
  DISHA: "http://194.195.117.38:8000",

  // Add more named base URLs as needed
};

const createInstance = (baseURLKey) => {
  const baseURL = baseURLs[baseURLKey];
  if (!baseURL) {
    throw new Error(`Base URL key ${baseURLKey} not found in baseURLs.`);
  }

  return axios.create({
    baseURL,
  });
};

export default createInstance;