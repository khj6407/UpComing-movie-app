import axios from "axios";

// baseURL : https://api.themoviedb.org/3/
// get : movie/upcoming
// params : api_key=23e8f945f9e2c5bc7936eb1c9e9c16ff
// params : language=en-US

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: "23e8f945f9e2c5bc7936eb1c9e9c16ff", language: "en-US" }
});

export const movies = {
  getUpComing: () => api.get("movie/upcoming")
};
