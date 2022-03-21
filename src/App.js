import { Route, Routes } from 'react-router-dom'
import getRoutes from './routes/routes'

function App() {
  return (
    <>
      <Routes>
        {getRoutes()}
      </Routes>
    </>
  );
}

export default App;
