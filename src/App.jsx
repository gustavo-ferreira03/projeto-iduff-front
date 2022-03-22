import Sidebar from './components/Sidebar/Sidebar'
import {Outlet, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
