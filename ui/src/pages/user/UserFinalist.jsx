import React, { useEffect, useState } from "react";
import Table from "../components/userFinalist/Table";
import Navbar from "../components/LandingPage/Navbar";
import { useNavigate } from "react-router";
import { useActionState } from "../../CustomHooks";
import { userGetRequest } from "../components/exports";
import { useAuth } from "../../AuthContext";

export default function UserFinalist() {

  const [eventDetails, setEventDetails] = useState({});
  const { loggedIn } = useAuth();

  const navigate = useNavigate();

  const date = new Date().getDate();

  const fetchEventDetails = async () => {
    try {
      const response = await userGetRequest("/events");
      setEventDetails(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [fetchEventDetailsCall, isLoading] = useActionState(fetchEventDetails, true);

  const today = new Date();
  let eventDate = new Date(eventDetails.final_round_date);

  useEffect(() => {
    if (loggedIn) {
      fetchEventDetailsCall();
      eventDate = new Date(eventDetails.final_round_date);
    } else {
      navigate("/");
    }
  }, [])

  // useEffect(() => {
  //   if (eventDetails) {

  //     if (eventDate > today) {
  //       navigate("/");
  //     }
  //   }
  // }, [eventDetails, navigate]);

  return (
    <>
      <Navbar />
      <section className=" px-3 pt-24 home" id="">
        <div className=" text-center text-violet-900 text-xl font-semibold">
          FINALIST
        </div>
        {
          isLoading ?
            <div className="h-96 w-full  items-center justify-center flex">
              <i
                style={{ color: "gray", fontSize: "2rem" }}
                className="gap-2 px-3 py-1 pi pi-spin pi-spinner"
              ></i>
            </div>
            :
            eventDate > today ?
              <div className="text-center h-96 flex items-center justify-center ">
                Yet to be announced
              </div>
              :
              <Table />
        }

      </section>
    </>
  );
}
