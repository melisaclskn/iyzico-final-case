import axios from "axios";
import { API } from "../constants";

export const getStarships = () => {
  return (
    axios.get(`${API}`)
  )
};
export const getStarshipsAPI = (api) => {
  return (
    axios.get(api)
  )
};
export const getStarshipsFromId= (id) => {
    return (
      axios.get(`${API}/${id}/`)
    )
  };