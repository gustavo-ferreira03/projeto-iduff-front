import { Route, Routes } from 'react-router-dom'
import getRoutes from './routes/routes'

import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        {getRoutes()}
      </Routes>
    </>
  );
}

export default App;
