import { appendFile } from "fs";

const fetchDiscogsCollection = async () => {
  try {
    console.log("fetch the api from discogs");

    return "discogsCollection";
  } catch (err) {
    console.log(err);
  }
};

export default {
  fetchDiscogsCollection,
};
