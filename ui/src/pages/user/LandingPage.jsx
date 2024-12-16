import "../../css/style.css";
import Navbar from "../components/Navbar";
import Initiatives from "../components/Initiatives";
import Timer from "../components/Timer";
import EventDetails from "../components/EventDetails";
import Roadmap from "../components/Roadmap";
import EventGuidelines from "../components/EventGuidelines";
import Footer from "../components/Footer";
import Home from "../components/Home";

function LangingPage() {
  return (
    <>
      {/* <div className="node" id="node"></div>
      <div className="cursor" id="cursor"></div> */}
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
