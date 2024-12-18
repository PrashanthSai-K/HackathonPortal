import { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router'
import LangingPage from './pages/user/LandingPage';
import Registration from './pages/user/Registration';
import LoginPage from './pages/user/LoginPage.jsx';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LangingPage />} />
      <Route path='/register' element={<Registration />} />
      <Route path='/Login' element={<LoginPage />} />
    </Routes>
      {/* <LangingPage /> */}
    </>
  )
}

export default App
