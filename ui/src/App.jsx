import { useState } from 'react'
import './App.css'
import Sample from './pages/user/Sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sample />
    </>
  )
}

export default App
