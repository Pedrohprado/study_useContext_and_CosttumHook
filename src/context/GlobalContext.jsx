/* eslint-disable react/prop-types */
import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStore = ({ children }) => {
  const [test, setTest] = React.useState(0);

  return (
    <GlobalContext.Provider value={{ test, setTest }}>
      {children}
    </GlobalContext.Provider>
  );
};
