import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {ViewResume} from '../components/ViewResume/ViewResume'
import {History} from '../components/History/History'
import App from '../App.jsx'
import Test from '../pages/Test'


export default function GetRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<App />}>
              <Route path='/ViewResume' element={<ViewResume />}></Route>
              <Route path='/History' element={<History />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
