import { useEffect, useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router'
import LangingPage from './pages/user/LandingPage';
import Registration from './pages/user/Registration';
import LoginPage from './pages/user/LoginPage.jsx';
import { ToastContainer } from 'react-toastify';
import ProblemStatements from './pages/user/ProblemStatements.jsx';
import  AdminProblemStatements from './pages/admin/ProblemStatements.jsx';
import ProblemStatementsView from './pages/admin/ProblemStatementsView.jsx';
import ProfilePage from './pages/user/ProfilePage.jsx';
import Finalist from './pages/admin/Finalist.jsx';
import { useAuth } from './AuthContext.jsx';
import Institution from './pages/admin/Institution.jsx';


function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
        <Route path='/problems-manage' element={<AdminProblemStatements /> } />

        <Route path='/problems/:id' element={<ProblemStatementsView /> } />
        <Route path='/profile' element={<ProfilePage /> } />
        <Route path='/finalist' element={<Finalist />} />
        <Route path='/institute-manage' element={<Institution />} />
      </Routes>

    </>
  )
}

export default App
