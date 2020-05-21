import { createStore } from "redux";

const defaultState = {
  data: [],
};

function Reducer(state = defaultState, action) {
  if (action.type === "ADD_DATA_API") {
    return {
      ...state,
      data: action.data,
    };
  }
  return state;
}

const store = createStore(Reducer);

export default store;
