import { createContext, useReducer } from "react";
import { TOGGLE_THEAME } from "../Actiontype";
import {TheameReducer } from "../Reducer/Theme_reducer";

const ThemeContext = createContext();

const iniVAl = {
  theme: "light",
};

export const TheameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TheameReducer, iniVAl);

  const toggle_theme = (val) => {
    let newTheme = val === "light" ? "dark" : "light";
    dispatch({ type: TOGGLE_THEAME, payload: newTheme });
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggle_theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;