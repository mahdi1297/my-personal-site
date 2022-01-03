import { ADD_TOKEN_TO_STORE } from "../actions/types";

const tokenReducers = (state = {}, { payload, type }) => {
  switch (type) {
    case ADD_TOKEN_TO_STORE:
      return payload;
    default:
      return state;
  }
};

export { tokenReducers };
