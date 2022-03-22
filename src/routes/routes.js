import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {VisuCuri} from '../components/VisuCuri'
import App from '../App.jsx'

export default function GetRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
              <Route path='/VisuCuri' element={<VisuCuri />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
