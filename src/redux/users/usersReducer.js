const USERS_INITIAL_STATE = {
  users: [],
};

export const usersReducer = (state = USERS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVEUSERS":
      return {
        users: action.payload,
      };
    case "DELETETARGET":
      return {
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};
