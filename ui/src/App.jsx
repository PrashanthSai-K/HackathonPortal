import './App.css';
import { Route, Routes } from 'react-router'
import LangingPage from './pages/user/LandingPage';
import Registration from './pages/user/Registration';
import LoginPage from './pages/user/LoginPage.jsx';
import { ToastContainer } from 'react-toastify';
import ProblemStatements from './pages/user/ProblemStatements.jsx';
import AdminProblemStatements from './pages/admin/ProblemStatements.jsx';
import ProblemStatementsView from './pages/admin/ProblemStatementsView.jsx';
import ProfilePage from './pages/user/ProfilePage.jsx';
import Finalist from './pages/admin/Finalist.jsx';
import Institution from './pages/admin/Institution.jsx';
import UserFinalist from './pages/user/UserFinalist.jsx';
import NotFount from './pages/components/404/NotFount.jsx';
import Team from './pages/user/Team.jsx';
import Notification from './pages/admin/Notification.jsx';
import Tools from './pages/admin/Tools.jsx';
import SubmittedList from './pages/admin/SubmittedList.jsx';


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
        <Route path='*' element={<NotFount />} />
        <Route path='/' element={<LangingPage />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/Login' element={<LoginPage />} />
        {/* <Route path='/Login' element={<LoginPage />} /> */}
        <Route path='/problems' element={<ProblemStatements />} />
        <Route path='/problems-manage' element={<AdminProblemStatements />} />
        <Route path='/problems/:id' element={<ProblemStatementsView />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/finalist' element={<Finalist />} />
        <Route path='/finalists' element={<UserFinalist />} />
        <Route path='/institute-manage' element={<Institution />} />
        <Route path='/notify' element={<Notification />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/submitted' element={<SubmittedList />} />



        {/* <Route path='/d' element={<Demo />} /> */}
      </Routes>
    </>
  )
}

export default App
