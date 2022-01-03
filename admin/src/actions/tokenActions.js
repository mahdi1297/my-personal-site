import { ADD_TOKEN_TO_STORE } from "./types";

const addTokenAction = (payload) => ({
  type: ADD_TOKEN_TO_STORE,
  payload: payload,
});

export { addTokenAction };
