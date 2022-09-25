import axios from "axios";
import { API } from "../constants";

export const getStarships = async () => {
  const { data } = await axios.get(`${API}`);
  return data;
};

export const getStarshipsAPI = async (api) => {
  const { data } = await await axios.get(api);
  return data;
};

export const getStarshipsFromId = async (id) => {
  const { data } = await axios.get(`${API}/${id}/`);
  return data;
};
export const getImg = async () => {
  const { data } = await axios.get("/db/data.json");
  return data;
};
export const getAllStarships = () => {
  let starships = [];
  return getStarships()
    .then((response) => {
      starships = response.results;
      return response.count;
    })
    .then((count) => {
      const numberOfPagesLeft = Math.ceil((count - 1) / 10);
      let promises = [];
      for (let i = 2; i <= numberOfPagesLeft; i++) {
        promises.push(axios(`https://swapi.dev/api/starships?page=${i}`));
      }
      return Promise.all(promises);
    })
    .then((response) => {
      starships = response.reduce(
        (acc, data) => [...acc, ...data.data.results],
        starships
      );
      return starships;
    });
};
