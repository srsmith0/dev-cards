import api from "../apis/cards";
import { 
  GET_TOPICS, 
  GET_CARDS, 
  ADD_TO_FOCUS, 
  GET_FOCUS, 
  TOGGLE_ANSWER, 
  CORRECT_ANSWER, 
  RESET_CARDS, 
  ADD_CARD, 
  DELETE_CARD } from "./types";

export const getTopics = () => async (dispatch) => {
  const res = await api.get("/topics");

  dispatch({ type: GET_TOPICS, payload: res.data });
};

export const getCards = id => async (dispatch) => {
  const res = await api.get(`/topics/${id}/cards`)
  dispatch({ type: GET_CARDS, payload: res.data });
};

export const addCard = card => async(dispatch) => {
  const res = await api.post(`/topics/${card.topicId}/cards`, card)
  dispatch({type: ADD_CARD, payload: res.data})
}

export const resetCards = () => {
  return {type: RESET_CARDS}
}

export const correctAnswer = id => ({type: CORRECT_ANSWER, payload: id})

export const deleteCard = id => ({type: DELETE_CARD, payload: id})

export const toggleAnswer = id => ({type: TOGGLE_ANSWER, payload: id})

export const addToFocus = card => ({type: ADD_TO_FOCUS, payload: card})

export const getFocus = () => ({type: GET_FOCUS})
