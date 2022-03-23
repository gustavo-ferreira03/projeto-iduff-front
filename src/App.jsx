import Sidebar from './components/Sidebar/Sidebar'
import {Outlet, Link} from 'react-router-dom';
import classes from "./styles/App.module.css"; 
import GetRoutes from './routes/routes';
import { CurrentUserContext } from './context/CurrentUserContext'

function App() {
  return (
    <div className={classes.flex}>
      <Sidebar />
      <GetRoutes />
    </div>
  );
}

export default App;
