import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SecondSignUpScreen from "../components/SecondSignUpScreen";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (user?.role == "client") {
      navigate('/work')
    }
    else if (user?.role === "freelancer") {

      navigate("/freelancer_Dashboard");
    }


    else {
      navigate('/')
    }
  }, [])


  return (
    <>
      <Navbar />

    </>
  );
};

export default Home;
