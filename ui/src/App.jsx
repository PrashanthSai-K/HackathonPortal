import { useState } from 'react'
import './App.css'
import LangingPage from './pages/user/LandingPage.jsx'
import { Route, Routes } from 'react-router'
import Registration from './pages/user/Registration.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LangingPage />} />
      <Route path='/register' element={<Registration />} />

    </Routes>
      {/* <LangingPage /> */}
    </>
  )
}

export default App
