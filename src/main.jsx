import React from 'react'
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About';
import App from './App'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/Github-Pages-Demo",
    element: <App />,
    children: [
      {
        path: "/Github-Pages-Demo",
        element: <Home />,
      },
      {
        path: "/Github-Pages-Demo",
        element: <About />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
