import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home, Navbar, About, Login } from './components/index.js';
import "../src/main-container.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route exact path='/*' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App