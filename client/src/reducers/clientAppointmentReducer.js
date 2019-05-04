import { GET_ALL_CLIENTAPP } from "../actions/types";

const initialState = {
  schedules: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CLIENTAPP:
      return Object.assign({}, state, {
        schedules: action.payload
      });
    default:
      return state;
  }
}
