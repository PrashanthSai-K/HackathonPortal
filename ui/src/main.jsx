import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router';

// import 'primereact/resources/';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
//core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

import { PrimeReactProvider } from 'primereact/api';
import { AuthProvider } from './AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </PrimeReactProvider>
  </StrictMode>,
)
