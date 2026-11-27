import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DownloadPage from './pages/DownloadPage.jsx'
import './index.css'

const isDownloadRoute = window.location.pathname.replace(/\/+$/, '') === '/download'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isDownloadRoute ? <DownloadPage /> : <App />}
  </React.StrictMode>
)
