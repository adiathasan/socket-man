import React, { useReducer, createContext, useContext } from "react";

export const context = createContext();

function ContextApiProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      default:
        return state;
    }
  };
  const [data, dispatch] = useReducer(reducer, { user: null });

  return (
    <context.Provider value={{ dispatch, data }}>{children}</context.Provider>
  );
}

export default ContextApiProvider;

export const useContextValue = () => useContext(context);
