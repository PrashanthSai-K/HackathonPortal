import { useEffect, useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router'
import LangingPage from './pages/user/LandingPage';
import Registration from './pages/user/Registration';
import LoginPage from './pages/user/LoginPage.jsx';
import { ToastContainer } from 'react-toastify';
import ProblemStatements from './pages/user/ProblemStatements.jsx';
import ProblemStatementsView from './pages/admin/ProblemStatementsView.jsx';
import ProfilePage from './pages/user/ProfilePage.jsx';
import Finalist from './pages/admin/Finalist.jsx';
import { useAuth } from './AuthContext.jsx';


function App() {

  const {getUser} = useAuth();

  useEffect(()=>{
    getUser();
  },[])

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
        <Route path='/problems' element={<ProblemStatements /> } />
        <Route path='/problems/:id' element={<ProblemStatementsView /> } />
        <Route path='/profile' element={<ProfilePage /> } />
        <Route path='/finalist' element={<Finalist />} />
      </Routes>

    </>
  )
}

export default App
