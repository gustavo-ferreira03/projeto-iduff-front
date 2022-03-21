import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Test from '../pages/Test'

export default function getRoutes() {
  return (
        <>
            <Route exact path="/" element={<Test />}/>
        </>
  )
}
