export const toggleAlertDelete = (payload) => {
  return { type: "ALERTDELETED", payload };
};

export const toggleAlertEdited = (payload) => {
  return { type: "ALERTEDITED", payload };
};
