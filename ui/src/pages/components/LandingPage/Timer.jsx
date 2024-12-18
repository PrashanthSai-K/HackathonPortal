import React, {useState, useEffect} from "react";

export default function Timer() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const nextYear = yyyy + 1;
    const dayMonth = "12/30/";
    let birthday = `${dayMonth}${yyyy}`;

    today = `${mm}/${dd}/${yyyy}`;
    if (today > birthday) {
      birthday = `${dayMonth}${nextYear}`;
    }

    const countDown = new Date(birthday).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      if (distance < 0) {
        setEventStarted(true);
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / day),
          hours: Math.floor((distance % day) / hour),
          minutes: Math.floor((distance % hour) / minute),
          seconds: Math.floor((distance % minute) / second),
        });
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="count-down">
        <div className="container">
          <h1 id="headline">Count Every Second Until The Event</h1>
          <div id="countdown">
           <p> {eventStarted ? "Hurray !! Event Started " : ""}</p>
            <ul>
              <li>
                <span id="days">{eventStarted ? "🥳" :timeLeft.days}</span>days
              </li>
              <li>
                <span id="hours">{eventStarted ? "🎉": timeLeft.hours}</span>Hours
              </li>
              <li>
                <span id="minutes">{eventStarted ? "🧨" : timeLeft.minutes}</span>Minutes
              </li>
              <li>
                <span id="seconds">{eventStarted ? "✨" :timeLeft.seconds}</span>Seconds
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
