import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
    <div className="flex items-center justify-center min-h-screen ">
    <App />
    </div>
  </React.StrictMode>,
)
