import "../../css/style.css";
import Navbar from "../components/LandingPage/Navbar";
import Initiatives from "../components/LandingPage/Initiatives";
import Timer from "../components/LandingPage/Timer";
import EventDetails from "../components/LandingPage/EventDetails";
import Roadmap from "../components/LandingPage/Roadmap";
import EventGuidelines from "../components/LandingPage/EventGuidelines";
import Footer from "../components/LandingPage/Footer";
import Home from "../components/LandingPage/Home";
import { NotificationButton } from "../components/Notification/Notification";

function LangingPage() {

  const announcements = [
    {
      id: 1,
      title: "Finalist Published",
      description: "Finalist results will be published soon stay tuned for updates",
      date: "10/01/2025",
      type: "deadline"
    },
  ]

  return (
    <>
      <Navbar />
      <Home />
      <EventDetails />
      <Initiatives />
      <Timer />
      <Roadmap />
      <EventGuidelines />
      <Footer />
      <NotificationButton announcements={announcements} />
    </>
  );
}

export default LangingPage;
