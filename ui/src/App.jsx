import { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router'
import LangingPage from './pages/user/LandingPage';
import Registration from './pages/user/Registration';
import LoginPage from './pages/user/LoginPage.jsx';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path='/' element={<LangingPage />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/Login' element={<LoginPage />} />
        {/* <Route path='/Login' element={<LoginPage />} /> */}
      </Routes>
      {/* <LangingPage /> */}
    </>
  )
}

export default App
