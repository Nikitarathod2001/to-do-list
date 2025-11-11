import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const backend = import.meta.env.VITE_BACKEND_URL;

  const [token, setToken] = useState(
    localStorage.getItem("todo-token") ? localStorage.getItem("todo-token") : false
  );


  const value = {
    backend,
    token, setToken,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;