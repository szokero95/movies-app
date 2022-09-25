import client from "./axiosConfig";
import { categoryType, movieType, tvType } from "./types";

const mdbApi = {
  getMovieList(type: movieType, params = { params: {} }) {
    const url = "movie/" + type;
    return client.get(url, params);
  },
  getTvList(type: tvType, params = { params: {} }) {
    const url = "tv/" + type;
    return client.get(url, params);
  },

  getVideos(cat: categoryType, id: number) {
    const url = cat + "/" + id + "/videos";
    return client.get(url, { params: {} });
  },
  credits(cat: categoryType, id: number) {
    const url = cat + "/" + id + "/credits";
    return client.get(url, { params: {} });
  },
  similar(cat: categoryType, id: number) {
    const url = cat + "/" + id + "/similar";
    return client.get(url, { params: {} });
  },
  search(cat: categoryType, params = { params: {} }) {
    const url = "search/" + cat;
    return client.get(url, params);
  },
  detail(cat: categoryType, id: number, params = { params: {} }) {
    const url = cat + "/" + id;
    return client.get(url, params);
  },
};

export default mdbApi;
