import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SecondSignUpScreen from "../components/SecondSignUpScreen";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      navigate('/work')
    }
  }, [])


  return (
    <>
      <Navbar />

    </>
  );
};

export default Home;
