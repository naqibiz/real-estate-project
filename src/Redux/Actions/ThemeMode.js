export const ThemeMode = (data) => {
  return (dispatch) => {
    dispatch({ type: "THEME_MODE", payload: data });
  };
};
