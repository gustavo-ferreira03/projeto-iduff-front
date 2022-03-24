import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import {Outlet, Link} from 'react-router-dom';
import classes from "./styles/App.module.css"; 
import GetRoutes from './routes/routes';
import { CurrentUserContext } from './context/CurrentUserContext'
import { api } from './services/api'

function App() {
  const [current_user, setCurrentUser] = useState({})
  useEffect(() => {
      api.get("/user", {headers: {
        "Auth-Token": localStorage.getItem("token")
      }})
      .then(resp => console.log(resp))
      .catch(error => console.error(error.message))
  })

  return (
    <div className={classes.flex}>
      <CurrentUserContext.Provider value={current_user}>
        <Sidebar />
        <GetRoutes />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
