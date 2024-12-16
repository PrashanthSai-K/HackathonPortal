import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div id="footer" className="footer-content">
          <h3>TAN<span className="text-[#7f58f3]">S</span>HACK'22</h3>
          <p style={{ width: "50vw" }}>
            <b style={{ fontWeight: 600 }}>
              Hackathon Coordinators:
              <br />
            </b>{" "}
            Dr. Person X /Dr.Person Y
            <br />
            <b style={{ fontWeight: 600 }}>Email: </b>
            paerson1@gamil.com/person2@gmail.com
            <br />
            <b style={{ fontWeight: 600 }}>
              Phone: <br />
            </b>{" "}
            +91 1234567890 / +91 1234567890
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
  );
}
