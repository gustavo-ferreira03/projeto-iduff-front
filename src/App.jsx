import Sidebar from './components/Sidebar/Sidebar'
import {Outlet, Link} from 'react-router-dom';
import classes from "./styles/App.module.css"; 

function App() {
  return (
    <div className={classes.flex}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
