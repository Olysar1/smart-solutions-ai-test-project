const SINGLE_USER_INITIAL_STATE = {
  singleUser: null,
};

export const singleUserReducer = (
  state = SINGLE_USER_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case "SAVESINGLEUSER":
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
