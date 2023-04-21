import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage.js'
import UserPage from './pages/UserPage'

export default function App() {
  return(
    <Routes>
      <Route exact path="/" element={ <HomePage/> }></Route>
      <Route path="/:id" element={ <UserPage/> }></Route>
    </Routes>
  );
}