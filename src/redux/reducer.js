import { combineReducers } from "redux";
import { usersReducer } from "./users/usersReducer";
import { loadingReducer } from "./loading/loadingReducer";
import { singleUserReducer } from "./singleUser/singleUserReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  singleUser: singleUserReducer,
  loading: loadingReducer,
});

export default rootReducer;
