const USERS_INITIAL_STATE = {
  users: [],
};

export const usersReducer = (state = USERS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVEUSERS":
      return {
        users: action.payload,
      };
    default:
      return state;
  }
};
