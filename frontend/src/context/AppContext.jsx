import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {toast} from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const backend = import.meta.env.VITE_BACKEND_URL;

  const [token, setToken] = useState(
    localStorage.getItem("todo-token") ? localStorage.getItem("todo-token") : false
  );
  const [userId, setUserId] = useState(false);
  const [username, setUsername] = useState(false);

  const getUserdata = async () => {
    try {

      const {data} = await axios.get(backend + "/api/user/get-userdata", {headers: {token}});

      if(data.success) {
        setUserId(data.userId);
        setUsername(data.username);
      }
      else {
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    backend,
    token, setToken,
    userId, username
  };

  useEffect(() => {
    if(token) {
      getUserdata();
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;