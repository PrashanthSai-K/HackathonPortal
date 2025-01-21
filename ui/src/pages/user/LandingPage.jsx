import "../../css/style.css";
import Initiatives from "../components/LandingPage/Initiatives";
import Timer from "../components/LandingPage/Timer";
import EventDetails from "../components/LandingPage/EventDetails";
import Roadmap from "../components/LandingPage/Roadmap";
import EventGuidelines from "../components/LandingPage/EventGuidelines";
import Footer from "../components/LandingPage/Footer";
import Home from "../components/LandingPage/Home";
import { NotificationButton } from "../components/Notification/Notification";
import Navbar from "../components/LandingPage/Navbar";
import { userGetRequest } from "../components/exports";
import { useEffect, useState } from "react";
import { useActionState } from "../../CustomHooks";

function LangingPage() {

  const [notifications, setNotifications] = useState([]);
  const [eventDetails, setEventDetails] = useState({});

  const fetchNotification = async () => {
    try {
      const response = await userGetRequest("/notification");
      setNotifications(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchEventDetails = async () => {
    try {
      const response = await userGetRequest("/events");
      setEventDetails(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [fetchEventDetailsCall, isLoading] = useActionState(fetchEventDetails, true);

  useEffect(() => {
    fetchEventDetailsCall();
    fetchNotification();
  }, [])

  return (
    <>
      {
          <>
            <Navbar />
            <Home eventDetails={eventDetails} />
            <EventDetails />
            <Initiatives />
            <Timer  eventDetails={eventDetails} />
            <Roadmap />
            <EventGuidelines eventDetails={eventDetails} />
            <Footer />
            <NotificationButton notifications={notifications} />
          </>
      }
    </>
  );
}

export default LangingPage;
