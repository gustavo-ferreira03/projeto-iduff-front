import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {ViewResume} from '../components/ViewResume'
import App from '../App.jsx'

export default function GetRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
              <Route path='/ViewResume' element={<ViewResume />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
