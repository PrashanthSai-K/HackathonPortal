import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
<<<<<<< HEAD
import './App.css'
import Sample from './pages/user/Sample'
=======
import './App.css';
>>>>>>> 563b6fb75ee27f9bed93f4777e0d75d018d717d6

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <Sample />
=======
      <div className='bg-black h-56 w-96'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='bg-black w-96'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 563b6fb75ee27f9bed93f4777e0d75d018d717d6
    </>
  )
}

export default App
