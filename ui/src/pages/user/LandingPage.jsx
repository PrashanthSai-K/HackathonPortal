import "../../css/style.css";
import Navbar from "../components/LandingPage/Navbar";
import Initiatives from "../components/LandingPage/Initiatives";
import Timer from "../components/LandingPage/Timer";
import EventDetails from "../components/LandingPage/EventDetails";
import Roadmap from "../components/LandingPage/Roadmap";
import EventGuidelines from "../components/LandingPage/EventGuidelines";
import Footer from "../components/LandingPage/Footer";
import Home from "../components/LandingPage/Home";

function LangingPage() {
  return (
    <>

      <Navbar />
      <Home />
      <EventDetails />
      <Initiatives />
      <Timer />
      <Roadmap />
      <p className="infooo">ABOUT</p>
      <h1 className="info">TAN<span className="text-[#7f58f3]">S</span>HACK'22</h1>
      <EventGuidelines />
      <Footer />
    </>
  );
}

export default LangingPage;
