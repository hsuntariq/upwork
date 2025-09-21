import React from 'react'
import './globals.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FirstSignUpScreen from './components/FirstSignUpScreen'
import { Toaster } from 'react-hot-toast'
import OTPVerification from './components/OTP'
import Work from './pages/Work'
import Freelancer from './pages/Freelancer'
import FirstJobSection from './pages/post-job/FirstJobSection'
import SecondJobSection from './pages/post-job/SecondJobSection'
import ThirdJobSection from './pages/post-job/ThirdJobSection'
import FourthJobSection from './pages/post-job/FourthJobScreen'
import FifthJobSection from './pages/post-job/FifthJobScreen'
import SixthJobSection from './pages/post-job/SixthJobScreen'
import Proposal from './pages/freelancer/Proposal'
import Chat from './components/Chat'
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
          <Route path='/first-job-section' element={<FirstJobSection />} />
          <Route path='/second-job-section' element={<SecondJobSection />} />
          <Route path='/third-job-section' element={<ThirdJobSection />} />
          <Route path='/fourth-job-section' element={<FourthJobSection />} />
          <Route path='/fifth-job-section' element={<FifthJobSection />} />
          <Route path='/sixth-job-section' element={<SixthJobSection />} />
          <Route path='/freelancer_Dashboard' element={<Freelancer />} />
          <Route path='/proposal' element={<Proposal />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>

    </>
  )
}

export default App