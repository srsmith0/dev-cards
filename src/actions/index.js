import api from "../apis/cards";
import { GET_TOPICS, GET_CARDS } from "./types";

export const getTopics = () => async (dispatch) => {
  const res = await api.get("/topics");

  dispatch({ type: GET_TOPICS, payload: res.data });
};
