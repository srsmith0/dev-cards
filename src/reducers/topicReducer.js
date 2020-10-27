import { GET_TOPICS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_TOPICS:
      return action.payload;
    default:
      return state;
  }
};
