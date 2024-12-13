import { useState } from 'react'
import './App.css'
import LangingPage from './pages/user/LandingPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LangingPage />
    </>
  )
}

export default App
