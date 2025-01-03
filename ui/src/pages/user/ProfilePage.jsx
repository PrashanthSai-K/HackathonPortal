import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import ProfileDetails from "../components/ProfileCreation/ProfileDetails";
import TeamDetails from "../components/ProfileCreation/TeamDetails";

export default function ProfilePage() {
  
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
          <TeamDetails/>
        </div>
      </section>
    </>
  );
}
