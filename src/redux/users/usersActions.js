export const saveUsers = (payload) => {
  return {
    type: "SAVEUSERS",
    payload,
  };
};

export const deleteUser = (payload) => {
  return {
    type: "DELETETARGET",
    payload,
  };
};
