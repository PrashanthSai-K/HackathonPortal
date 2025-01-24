import React, { useEffect } from "react";
import ProfileDetails from "../components/ProfileCreation/ProfileDetails";
import Navbar from "../components/LandingPage/Navbar";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router";

export default function ProfilePage() {

  const { loggedIn, user } = useAuth();
  const navigate = useNavigate();

  const checkUser = () => {
    if (!loggedIn) {
      navigate("/");
    }
    if (user?.role != "user") {
      navigate("/")
    }
  }

  useEffect(() => {
    checkUser();
  }, [])

  return (
    <>
      <Navbar />
      <section className="home" id="home">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <h3 className="pb-5 g-black font-semibold text-3xl text-[#7f58f3] text-center">
          PROFILE DETAILS
        </h3>
        <div className="flex flex-col justify-center items-center w-full">
          <ProfileDetails />
        </div>
      </section>
    </>
  );
}
