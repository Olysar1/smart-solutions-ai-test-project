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

export const updateUser = (payload) => {
  return {
    type: "UPDATETARGET",
    payload,
  };
};
