import { combineReducers } from "redux";
import { usersReducer } from "./users/usersReducer";
import { loadingReducer } from "./loading/loadingReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  loading: loadingReducer,
});

export default rootReducer;
