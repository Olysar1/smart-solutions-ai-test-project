import { combineReducers } from "redux";
import { usersReducer } from "./users/usersReducer";
import { loadingReducer } from "./loading/loadingReducer";
import { singleUserReducer } from "./singleUser/singleUserReducer";
import { modalsReducer } from "./modals/modalsReducer";
import { alertsReducer } from "./alerts/alertsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  singleUser: singleUserReducer,
  loading: loadingReducer,
  modals: modalsReducer,
  alerts: alertsReducer,
});

export default rootReducer;
