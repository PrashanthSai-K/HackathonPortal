import React from "react";

export default function Timer() {
  return (
    <>
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
    </>
  );
}
