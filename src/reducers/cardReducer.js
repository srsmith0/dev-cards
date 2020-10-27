import { GET_CARDS, TOGGLE_ANSWER, CORRECT_ANSWER, RESET_CARDS, ADD_CARD } from "../actions/types";



export default (state = [], action) => {
  switch (action.type) {
    case GET_CARDS:
      return action.payload;
    case ADD_CARD:
      return [...state, action.payload];
    case CORRECT_ANSWER:
      return state.filter(card => card.id !== action.payload);
    case TOGGLE_ANSWER:
      return state.map( card => {
        return card.id === action.payload ? {...card, showAnswer: !card.showAnswer} : card
      });
    case RESET_CARDS:
      return [];
    default:
      return state;
  }
};
