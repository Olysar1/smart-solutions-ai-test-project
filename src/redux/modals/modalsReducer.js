const MODALS_INITIAL_STATE = {
  targetedUser: null,
  deleteModalIsVisible: false,
  editModalIsVisible: false,
};

export const modalsReducer = (state = MODALS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOWDELETEMODAL":
      return {
        ...state,
        ...(action.payload
          ? { targetedUser: action.payload }
          : { targetedUser: null }),
        deleteModalIsVisible: true,
      };
    case "HIDEDELETEMODAL":
      return {
        ...state,
        ...(action.payload
          ? { targetedUser: action.payload }
          : { targetedUser: null }),
        deleteModalIsVisible: false,
      };
    case "SHOWEDITMODAL":
      return {
        ...state,
        ...(action.payload
          ? { targetedUser: action.payload }
          : { targetedUser: null }),
        editModalIsVisible: true,
      };
    case "HIDEEDITMODAL":
      return {
        ...state,
        ...(action.payload
          ? { targetedUser: action.payload }
          : { targetedUser: null }),
        editModalIsVisible: false,
      };
    default:
      return state;
  }
};
