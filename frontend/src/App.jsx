import React from 'react'
import './globals.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FirstSignUpScreen from './components/FirstSignUpScreen'
const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<FirstSignUpScreen />} />
        </Routes>
      </Router>

    </>
  )
}

export default App