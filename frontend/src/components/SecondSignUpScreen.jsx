import TextField from "@mui/material/TextField";
import React, { useEffect, useMemo, useState } from "react";
import countryList from 'react-select-country-list'
import Select from 'react-select'
import ReactFlagsSelect from "react-flags-select";
import axios from 'axios'
import toast from "react-hot-toast";
import { ClipLoader, FadeLoader } from 'react-spinners'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { regUser, userReset } from "../features/auth/authSlice";
const SecondSignUpScreen = ({ role }) => {

  const { userLoading, userSuccess, userError, userMessage, user } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      navigate('/work')
    }
  }, [])


  const [formFields, setFormFields] = useState({
    f_name: '', l_name: '', email: '', password: '', mails: false, terms: true
  })
  const [loading, setLoading] = useState(false)

  const { f_name, l_name, email, password, mails, terms } = formFields
  const [country, setCountry] = useState('')

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value
    })
  }







  useEffect(() => {
    if (userError) {
      toast.error(userMessage)
    }
    else if (userSuccess) {
      navigate('/otp-verification')
    }


    dispatch(userReset())

  }, [userError, userSuccess])





  const handleRegister = async () => {
    dispatch(regUser({ f_name, l_name, email, password, mails, terms, role, country }))
  }



  return (
    <>
      <div className="min-h-screen  bg-white px-4">
        <div className="flex items-center justify-between p-5">
          <img src="/svgs/logo.svg" width={100} alt="" />

          <div className="flex items-center gap-3">
            <h4 className=" text-lg">here to hire talet?</h4>

            <button
              type="button"
              className="text-green-500 font-semibold hover:underline hover:text-black text-lg cursor-pointer"
            >
              Join as a Client
            </button>
          </div>
        </div>
        <div className="w-full h-full mt-10 mx-auto max-w-xl text-center">
          <div className="space-y-4">
            <h3 className="py-2.5  text-4xl">Sign up to find work you love</h3>

            <div className="flex  items-center gap-3.5">
              <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-50">
                <img src="/svgs/apple.svg" alt="Apple" className="h-5 mr-2" />
                Continue with Apple
              </button>
              <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-50">
                <img src="/svgs/google.svg" alt="Apple" className="h-5 mr-2" />
                Continue as Hussnain
              </button>
            </div>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-2 text-gray-500 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <div className="flex gap-2">
              <div className="w-full flex flex-col">

                <TextField name="f_name" value={f_name} onChange={handleChange} id="outlined-basic" label="First Name" variant="outlined" />
              </div>
              <div className="w-full flex flex-col">
                <TextField name="l_name" value={l_name} onChange={handleChange} label='Last Name' variant="outlined" />
              </div>
            </div>

            <TextField name="email" value={email} onChange={handleChange} label='Email' className="w-full mb-2" variant="outlined" />

            <div className="relative mt-3">
              <TextField name="password" value={password} onChange={handleChange} label='Password' className="w-full" type='password' variant="outlined" />
              <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"></span>
            </div>

            <ReactFlagsSelect value={country} onSelect={(code) => setCountry(code)} />
            <label className="flex items-start text-sm mt-1 gap-2">
              <input name="mails" value={mails} onChange={handleChange} type="checkbox" className="mt-1" />
              <span>
                Send me helpful emails to find rewarding work and job leads.
              </span>
            </label>

            <label className="flex items-start text-sm gap-2">
              <input name="terms" value={terms} onChange={handleChange} type="checkbox" className="mt-1" />
              <span>
                Yes, I understand and agree to the{" "}
                <a href="#" className="text-blue-600 underline">
                  Upwork Terms of Service
                </a>
                , including the{" "}
                <a href="#" className="text-blue-600 underline">
                  User Agreement
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <button disabled={userLoading} onClick={handleRegister} className={`w-full ${userLoading ? 'bg-gray-300' : 'bg-green-600'} hover:bg-green-700 flex items-center justify-center gap-2 text-white font-medium py-2 rounded mt-1`}>
              {userLoading ? (
                <>
                  <ClipLoader
                    size={20}
                    color="white"
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                  Creating Account
                </>
              ) : 'Create my account'}
            </button>

            <p className="text-sm mt-4">
              Already have an account?{" "}
              <a href="#" className="text-green-600 underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSignUpScreen;
