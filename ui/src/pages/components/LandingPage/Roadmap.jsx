import React from "react";

export default function Roadmap() {
  return (
    <>
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
    </>
  );
}
