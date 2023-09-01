import { Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <div >
      <Fragment>
        <Routes>
          <Route path="/Github-Pages-Demo" element={<Home />} />
          <Route path="/Github-Pages-Demo/About" element={<About />} />
        </Routes>
      </Fragment>
    </div>
  )
}

export default App
