import React from 'react'
import './globals.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FirstSignUpScreen from './components/FirstSignUpScreen'
import { Toaster } from 'react-hot-toast'
import OTPVerification from './components/OTP'
import Work from './pages/Work'
const App = () => {
  return (
    <>

      <Router>
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<FirstSignUpScreen />} />
          <Route path='/otp-verification' element={<OTPVerification />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </Router>

    </>
  )
}

export default App