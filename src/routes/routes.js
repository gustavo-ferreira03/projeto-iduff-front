import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {ViewResume} from '../pages/ViewResume/ViewResume'
import {History} from '../pages/History/History'
import Classroom from '../pages/Classroom/Classroom'
import App from '../App.jsx'
import Test from '../pages/Test'
import EditProfile from '../pages/EditProfile/EditProfile'

export default function GetRoutes() {
  return (
      <Routes>
          <Route path="/test" element={<Test />} />
          <Route path='/view_resume' element={<ViewResume />}></Route>
          <Route path='/history' element={<History />}></Route>
          <Route path='/edit_profile' element={<EditProfile />}></Route>
          <Route path='/classroom' element={<Classroom />}></Route>
      </Routes>
  )
}
