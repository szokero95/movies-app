import client from "../utils/axiosConfig";
import { categoryType, movieType, tvType } from "../utils/types";

export const useApi = () => {
  const getMovieList = (type: movieType, params = { params: {} }) => {
    const url = "movie/" + type;
    return client.get(url, params);
  };
  const getTvList = (type: tvType, params = { params: {} }) => {
    const url = "tv/" + type;
    return client.get(url, params);
  };
  const getVideos = (cat: categoryType, id: number) => {
    const url = cat + "/" + id + "/videos";
    return client.get(url, { params: {} });
  };
  const getCredits = (cat: categoryType, id: number) => {
    const url = cat + "/" + id + "/credits";
    return client.get(url, { params: {} });
  };
  const getSimilar = (cat: categoryType, id: number) => {
    const url = cat + "/" + id + "/similar";
    return client.get(url, { params: {} });
  };
  const search = (cat: categoryType, params = { params: {} }) => {
    const url = "search/" + cat;
    return client.get(url, params);
  };
  const getDetail = (
    cat: categoryType,
    id: number,
    params = { params: {} }
  ) => {
    const url = cat + "/" + id;
    return client.get(url, params);
  };

  return {
    getMovieList,
    getTvList,
    getVideos,
    getCredits,
    getSimilar,
    search,
    getDetail,
  };
};
