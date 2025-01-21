import React from "react";
import tnlogo from "../../../assets/tnlogo.png"
import { useAuth } from "../../../AuthContext";
import { useNavigate } from "react-router";

export default function Home({ eventDetails }) {

  const { user, loggedIn } = useAuth();

  const formatDateWithOrdinal = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });

    // Determine the ordinal suffix
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
          ? "nd"
          : day % 10 === 3 && day !== 13
            ? "rd"
            : "th";

    return `${day}${suffix} of ${month}`;
  };

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!loggedIn) {
      navigate("/register");
    }
    if (user.role == "admin") {
      navigate("/");
    }
    if (user.role == "user") {
      navigate("/team");
    }
  }

  return (
    <>
      <section className="home" id="home">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <h4 className="main_title items-center" style={{ marginTop: "10vh" }} >
          <center>
            <img src={tnlogo} alt="" className="w-24 h-24" />
          </center>
          TN I<span style={{ fontSize: "60px", color: "#7f58f3", fontWeight: "bold" }}>D</span>EATHON'25
        </h4>
        <center>
          <h5
            style={{
              backgroundColor: "#000",
              width: "30vw",
              color: "#fff",
              borderRadius: "2px",
              paddingLeft: "5px",
              paddingBottom: "0%",
            }}
          >
            TAMILNADU HIGHER EDUCATION IDEATHON 2025
          </h5>
        </center>
        <br />
        <h4
          className="main_title"
          style={{ paddingTop: "0%", fontSize: "34px" }}
        >
          CASH PRIZE WORTH{" "}
          <span
            style={{
              letterSpacing: "5px",
              fontSize: "40px",
              fontWeight: "bold",
              paddingTop: "10px",
              color: "#7f58f3"
            }}
          >
            {eventDetails.prize_money}
          </span>
        </h4>

        <h2 style={{ marginTop: "20vh" }}>
          <center>
            <img src={tnlogo} alt="" className="w-24 h-24 mb-5" />
          </center>
          TN I
          <span
            style={{ color: "#7f58f3", fontSize: "30px", paddingBottom: "0%", fontWeight: "bold" }}
          >
            D
          </span>{""}
          EATHON'25
        </h2>
        <h2
          className="main_title"
          style={{ paddingTop: "2%", fontSize: "15px", marginBottom: "10vh" }}
        >
          CASH PRIZE WORTH{" "}
          <span className=" text-violet-500" style={{ letterSpacing: "5px", fontSize: "20px", fontWeight: "bold", color: "rgb(139 92 246 / var(--tw-text-opacity, 1))" }}>
            3 LAKHS
          </span>
        </h2>

        <a className="login-button join nodeHover" onClick={handleRegister}>
          Register Now{" "}
        </a>
        <p
          style={{
            textAlign: "center",
            marginTop: "35px",
            fontFamily: "poppins",
            fontSize: "22px",
          }}
        >
          on the {formatDateWithOrdinal(eventDetails.event_date)}
        </p>

        <div id="mouse-scroll">
          <div className="mouse" id="about">
            <div className="mouse-in"></div>
          </div>
          <div>
            <span className="down-arrow-1"></span>
            <span className="down-arrow-2"></span>
            <span className="down-arrow-3"></span>
          </div>
        </div>
      </section>
    </>
  );
}
