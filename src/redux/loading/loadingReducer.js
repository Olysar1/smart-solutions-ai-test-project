const LOADING_INITIAL_STATE = {
  isLoading: false,
};

export const loadingReducer = (state = LOADING_INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLELOADING":
      return {
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};
