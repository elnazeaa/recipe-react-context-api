import React, { createContext } from "react";

export const ContextApi = createContext();

const ContextApiProvider = (props) => {
  return (
    <ContextApi.Provider value="hello">{props.children}</ContextApi.Provider>
  );
};

export default ContextApiProvider;
