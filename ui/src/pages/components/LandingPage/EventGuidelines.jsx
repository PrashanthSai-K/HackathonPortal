import React from 'react'
import Events from "../../assets/event.png";
import Registration from "../../assets/registration.png";
import Benefits from "../../assets/benefits.png";

export default function EventGuidelines() {
  return (
    <>
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
                                Venue: Banquet Hall
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
    </>
  )
}
