import { ADD_TO_FOCUS, GET_FOCUS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_FOCUS:
      return state;
    case ADD_TO_FOCUS:
      let index = state.findIndex(card => card.id === action.payload.id);
        if(index === -1) return [...state, action.payload];
        return state;
    default:
      return state;
  }
};