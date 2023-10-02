export const showDeleteModal = (payload) => {
  return { type: "SHOWDELETEMODAL", payload };
};

export const hideDeleteModal = (payload) => {
  return { type: "HIDEDELETEMODAL", payload };
};

export const showEditModal = (payload) => {
  return { type: "SHOWEDITMODAL", payload };
};

export const hideEditModal = (payload) => {
  return { type: "HIDEEDITMODAL", payload };
};
