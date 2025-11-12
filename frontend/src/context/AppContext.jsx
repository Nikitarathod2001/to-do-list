import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {toast} from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const backend = import.meta.env.VITE_BACKEND_URL;

  const [token, setToken] = useState(
    localStorage.getItem("todo-token") ? localStorage.getItem("todo-token") : false
  );
  const [username, setUsername] = useState(false);
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(false);

  const getUserdata = async () => {
    try {

      const {data} = await axios.get(backend + "/api/user/get-userdata", {headers: {token}});

      if(data.success) {
        setUsername(data.username);
      }
      else {
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const getTodoList = async () => {
    try {

      const {data} = await axios.get(backend + "/api/todos/get-todo-list", {headers: {token}});

      if(data.success) {
        setTodos(data.todos);
      }
      else {
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    backend,
    token, setToken,
    username,
    getTodoList,
    todos,
    status
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