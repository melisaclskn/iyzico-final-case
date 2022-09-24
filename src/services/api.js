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

