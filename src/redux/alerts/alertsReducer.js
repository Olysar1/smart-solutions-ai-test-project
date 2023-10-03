const ALERTS_INITIAL_STATE = {
  alertDeleted: { check: false, targetName: "" },
  alertEdited: { check: false, targetName: "" },
};

export const alertsReducer = (state = ALERTS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "ALERTDELETED":
      return {
        ...state,
        alertDeleted: {
          check: !state.alertDeleted.check,
          ...(action.payload
            ? { targetName: action.payload }
            : { targetName: "" }),
        },
      };
    case "ALERTEDITED":
      return {
        ...state,
        alertEdited: {
          check: !state.alertEdited.check,
          ...(action.payload
            ? { targetName: action.payload }
            : { targetName: "" }),
        },
      };
    default:
      return state;
  }
};
