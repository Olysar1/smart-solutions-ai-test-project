import { combineReducers } from "redux";
import { usersReducer } from "./users/usersReducer";
import { loadingReducer } from "./loading/loadingReducer";
import { singleUserReducer } from "./singleUser/singleUserReducer";
import { modalsReducer } from "./modals/modalsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  singleUser: singleUserReducer,
  loading: loadingReducer,
  modals: modalsReducer,
});

export default rootReducer;
