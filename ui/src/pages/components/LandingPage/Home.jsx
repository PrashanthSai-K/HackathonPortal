import React from "react";
import tnlogo from "../../../assets/tnlogo.png"

export default function Home() {
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
              fontSize: "50px",
              paddingTop: "10px",
              color: "#7f58f3"
            }}
          >
            3 LAKHS
          </span>
        </h4>

        <h2 style={{ marginTop: "30vh" }}>
          TAN'
          <span
            style={{ color: "#7f58f3", fontSize: "30px", paddingBottom: "0%" }}
          >
            S
          </span>{" "}
          HACK'24
        </h2>
        <br />
        <h2
          className="main_title"
          style={{ paddingTop: "0%", fontSize: "15px", marginBottom: "10vh" }}
        >
          CASH PRIZE WORTH{" "}
          <span style={{ letterSpacing: "5px", fontSize: "20px" }}>
            3 LAKHS
          </span>
        </h2>

        <a className="login-button join nodeHover" href="prob-state.php">
          Join the Event{" "}
        </a>
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "poppins",
            fontSize: "22px",
          }}
        >
          on the 3rd and 4th of December
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
