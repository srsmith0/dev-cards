import { ADD_TO_FOCUS, GET_FOCUS, TOGGLE_ANSWER, CORRECT_ANSWER, CLEAR_FOCUS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_FOCUS:
      return state;
    case ADD_TO_FOCUS:
      let index = state.findIndex(card => card.id === action.payload.id);
        if(index === -1) return [...state, action.payload];
        return state;
    case CORRECT_ANSWER:
      return state.filter(card => card.id !== action.payload);    
    case TOGGLE_ANSWER:
      return state.map( card => {
        return card.id === action.payload ? {...card, showAnswer: !card.showAnswer} : card
         });
    case CLEAR_FOCUS:
      return [];
    default:
      return state;
  }
};