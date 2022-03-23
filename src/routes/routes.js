import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {ViewResume} from '../pages/ViewResume/ViewResume'
import {History} from '../pages/History/History'
import Classroom from '../pages/Classroom/Classroom'
import App from '../App.jsx'
import Test from '../pages/Test';


export default function GetRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<App />}>
              <Route path='/ViewResume' element={<ViewResume />}></Route>
              <Route path='/History' element={<History />}></Route>
              <Route path='/Classroom' element={<Classroom />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
