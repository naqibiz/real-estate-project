const INITIAL_STATE = {
  themeMode: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "THEME_MODE":
      return { ...state, themeMode: action.payload };
    default:
      return state;
  }
};
