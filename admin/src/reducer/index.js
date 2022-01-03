import { combineReducers } from "redux";
import { tokenReducers } from "./tokenReducer";

const reducer = combineReducers({
  user: tokenReducers,
});

export default reducer;
