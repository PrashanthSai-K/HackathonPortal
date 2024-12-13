import React from 'react'
import Logo from "../../assets/logo.png"
import "../../css/style.css"
import Layer2 from "../../assets/layer 2.png";
import Layer0 from "../../assets/layer 0.png";
import Layer3 from "../../assets/layer 3.png";
import Registration from "../../assets/registration.png";
import Events from "../../assets/event.png";
import Benefits from "../../assets/benefits.png";
import Navbar from '../components/Navbar';

function LangingPage() {
    return (
        <>
            <div class="node" id="node"></div>
            <div class="cursor" id="cursor"></div>
            <Navbar />
            <section class="home" id="home">

                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>

                <h4 class="main_title" style={{ marginTop: "22vh" }}>TAN<span style={{ fontSize: "60px" }}>S</span> HACK'24</h4>
                <center>
                    <h5 style={{ backgroundColor: "#000", width: "30vw", color: "#fff", borderRadius: "2px", paddingLeft: "5px", paddingBottom: "0%" }}>TANSCHE SOFTWARE HACKATHON 2024</h5>
                </center><br />
                <h4 class="main_title" style={{ paddingTop: "0%", fontSize: "34px" }}>CASH PRIZE WORTH <span style={{ letterSpacing: "5px", fontSize: "50px", paddingTop: "10px" }}>3 LAKHS</span></h4>


                <h2 style={{ marginTop: "30vh" }}>BIT'<span style={{ color: "#7f58f3", fontSize: "30px", paddingBottom: "0%" }}>S</span> HACK'22</h2><br />
                <h2 class="main_title" style={{ paddingTop: "0%", fontSize: "15px", marginBottom: "10vh" }}>CASH PRIZE WORTH <span style={{ letterSpacing: "5px", fontSize: "20px" }}>3 LAKHS</span></h2>

                <a class="login-button join nodeHover" href="prob-state.php">Join the Event </a>
                <p style={{ textAlign: "center", marginTop: "20px", fontFamily: "poppins", fontSize: "22px" }}>on the 3rd and 4th of December</p>

                <div id="mouse-scroll">
                    <div class="mouse" id="about">
                        <div class="mouse-in"></div>
                    </div>
                    <div>
                        <span class="down-arrow-1"></span>
                        <span class="down-arrow-2"></span>
                        <span class="down-arrow-3"></span>
                    </div>
                </div>
            </section>
            <section className="about">
                <h3 style={{ textAlign: "center" }}>
                    <ai style={{ fontSize: "30px" }}>“</ai>
                    <span style={{ color: "#4523ac", fontSize: "30px" }}>E</span>
                    verybody has a creative potential and from the moment you can express
                    this creative potential, you can start changing the world”
                    <br />
                    <npa style={{ fontFamily: "'Poppins', sans-serif" }}>
                        - Paul Coelho
                    </npa>
                </h3>
                <div className="about-container">
                    <h2 style={{ color: "#4523ac" }}>BIT'S HACK'22</h2>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; It is a pioneer program for BIT
                        students to explore the depth of recent technologies and its usage
                        over the problems that they are going to handle. BIT'S HACK'22
                        assist students to:
                    </p>
                    <br />
                    <p>
                        <i className="fa fa-dot-circle-o" style={{ fontSize: "15px" }}></i>
                        &nbsp;&nbsp;Their enthralling ideas to solve real-life problem
                        statements and win prizes.
                    </p>
                    <br />
                    <p>
                        <i className="fa fa-dot-circle-o" style={{ fontSize: "15px" }}></i>
                        &nbsp;&nbsp;Get guidance from the top experts from the industry and
                        academia.
                    </p>
                    <br />
                    <p>
                        <i className="fa fa-dot-circle-o" style={{ fontSize: "15px" }}></i>
                        &nbsp;&nbsp;Learn new skills, improve presentation skills and have
                        fun developing & coding.
                    </p>
                    <div className="sphere">
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                    </div>
                </div>
            </section>

            <div className="key-points">
                <div
                    className="points-left"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={Layer2}
                        alt="Futuristic Vec tor"
                        style={{ width: "100px", height: "100px" }}
                    />
                    <h1>
                        Internal Problem <br />
                        statements
                    </h1>
                    <p>
                        The stakeholders within the campus
                        <br />
                        like Verticals Team, Skills Team,
                        <br />
                        CoE Team, Academics Team etc requiring solutions for the problems
                        existing in the campus.
                    </p>
                </div>
                <hr />
                <div
                    className="points-center "
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={Layer0}
                        alt="Ingenious Vector"
                        style={{ width: "100px", height: "100px" }}
                    />
                    <h1>Open Innovation category</h1>
                    <p>
                        To submit innovative ideas that can be implemented within our
                        campus.
                    </p>
                </div>
                <hr />
                <div
                    className="points-right"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={Layer3}
                        alt="Empowering Vector"
                        style={{ width: "100px", height: "100px" }}
                    />
                    <h1>Smart India Hackathon</h1>
                    <p>
                        Problem statements will be shared from Smart India Hackathon 2022
                        Portal.
                    </p>
                </div>
            </div>
            <div className="count-down">
                <div className="container">
                    <h1 id="headline">Count Every Second Until The Event</h1>
                    <div id="countdown">
                        <ul>
                            <li>
                                <span id="days"></span>days
                            </li>
                            <li>
                                <span id="hours"></span>Hours
                            </li>
                            <li>
                                <span id="minutes"></span>Minutes
                            </li>
                            <li>
                                <span id="seconds"></span>Seconds
                            </li>
                        </ul>
                    </div>
                    <div id="content" className="emoji">
                        <span role="img" aria-label="party">
                            🥳
                        </span>
                        <span role="img" aria-label="celebration">
                            🎉
                        </span>
                        <span role="img" aria-label="sparkles">
                            ✨
                        </span>
                    </div>
                </div>
            </div>
            <p id="guidelines"></p>
            <section className="event">
                <h2>HOW TO TAKE PART?</h2>
                <div className="event-process">
                    <div className="step">
                        <h1 className="numbering">1</h1>
                        <div className="left">
                            <h3>
                                <span>Register for the event</span>
                            </h3>
                            <h5>
                                before <span>November 20</span> / 11:59 pm
                            </h5>
                        </div>
                        <div className="right">
                            <h4>
                                Create your team and
                                <br />
                                register for the event
                            </h4>
                        </div>
                    </div>
                    <div className="step">
                        <h1 className="numbering">2</h1>
                        <div className="left">
                            <h3>
                                <span>Select your Problem Statement</span>
                            </h3>
                        </div>
                        <div className="right">
                            <h4>
                                Choose one problem
                                <br />
                                statement from the given List
                            </h4>
                        </div>
                    </div>
                    <div className="step">
                        <h1 className="numbering">3</h1>
                        <div className="left">
                            <h3>
                                <span>Submit your SOP's</span>
                            </h3>
                        </div>
                        <div className="right">
                            <h4>
                                An approach to the chosen
                                <br />
                                statement is to be submitted
                            </h4>
                        </div>
                    </div>
                    <div className="step">
                        <h1 className="numbering">4</h1>
                        <div className="left">
                            <h3>
                                <span>Confirmation</span>
                            </h3>
                        </div>
                        <div className="right">
                            <h4>
                                Is your team selected?
                                <br />
                                Final step is to make your presence in.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <p className="infooo">ABOUT</p>
            <h1 className="info">BIT'S HACK'22</h1>
            <section className="reg">
                <div className="continer">
                    <h3>Registration</h3>
                    <center>
                        <img
                            src={Registration}
                            alt="Registration Image"
                            width="120px"
                            height="120px"
                        />
                        <h4>Team Strength</h4>
                        <p>
                            <i
                                className="fa fa-dot-circle-o"
                                style={{ fontSize: "15px" }}
                            ></i>{" "}
                            Minimum: 3
                        </p>
                        <p>
                            <i
                                className="fa fa-dot-circle-o"
                                style={{ fontSize: "15px" }}
                            ></i>{" "}
                            Maximum: 6
                        </p>
                    </center>
                </div>
                <div className="continer">
                    <h3>Main Event</h3>
                    <center>
                        <img
                            src={Events}
                            alt="Event Image"
                            width="120px"
                            height="120px"
                        />
                        <p>
                            <i
                                className="fa fa-dot-circle-o"
                                style={{ fontSize: "15px" }}
                            ></i>{" "}
                            Venue: Main Auditorium
                        </p>
                        <p>
                            <i
                                className="fa fa-dot-circle-o"
                                style={{ fontSize: "15px" }}
                            ></i>{" "}
                            Date: 3rd and 4th December 2022
                        </p>
                    </center>
                </div>
                <div className="continer">
                    <h3>Benefits</h3>
                    <center>
                        <img
                            src={Benefits}
                            alt="Benefits Image"
                            width="120px"
                            height="120px"
                        />
                        <p>
                            <i
                                className="fa fa-dot-circle-o"
                                style={{ fontSize: "15px" }}
                            ></i>{" "}
                            Industry Mentoring for Top Performing Teams for their
                            Projects/Products
                        </p>
                    </center>
                </div>
            </section>

            <footer>
                <div id="footer" className="footer-content">
                    <h3>BIT'S HACK'22</h3>
                    <p style={{ width: "50vw" }}>
                        <b style={{ fontWeight: 600 }}>
                            Hackathon Coordinators:
                            <br />
                        </b>{" "}
                        Dr.E.L.Pradeesh/Dr.P.Purusothaman
                        <br />
                        <b style={{ fontWeight: 600 }}>Email: </b>
                        pradeeshel@bitsathy.ac.in/purusothaman@bitsathy.ac.in
                        <br />
                        <b style={{ fontWeight: 600 }}>
                            Phone: <br />
                        </b>{" "}
                        +91 9944820144 / +91 9952013214
                    </p>
                    <ul className="socials">
                        <li></li>
                    </ul>
                    <div className="footer-menu">
                        <ul className="f-menu">
                            <li>
                                <a className="nodeHover" href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nodeHover" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="nodeHover" href="#guidelines">
                                    Guidelines
                                </a>
                            </li>
                            <li>
                                <a className="nodeHover" href="prob-state.php">
                                    Problem-Statement
                                </a>
                            </li>
                            <li>
                                <a className="nodeHover" href="profile.php">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        Created with ❤ by{" "}
                        <a className="nodeHover" href="#">
                            Sai Prashanth K
                        </a>{" "}
                        &{" "}
                        <a className="nodeHover" href="#">
                            Hariharan P
                        </a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default LangingPage