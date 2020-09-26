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
      case "USER_SIGNED_IN":
        return {
          ...state,
          user: action.user,
        };
      case "CHANNELS_ADDED":
        return {
          ...state,
          channels: action.channels,
        };
      case "SEARCH_ADDED":
        return {
          ...state,
          search: action.search,
        };
      case "EDIT_MESSAGE_RECIVED":
        return {
          ...state,
          editMessage: action.editMessage,
        };
      case "EDIT_MESSAGE_SENT":
        return {
          ...state,
          editMessage: null,
        };
      default:
        return state;
    }
  };
  const [data, dispatch] = useReducer(reducer, {
    user: null,
    channels: null,
    search: null,
    editMessage: null,
  });

  return (
    <context.Provider value={{ dispatch, data }}>{children}</context.Provider>
  );
}

export default ContextApiProvider;

export const useContextValue = () => useContext(context);
