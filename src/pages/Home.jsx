import React from "react";
import "../styles/home.scss";
import Countdown from "react-countdown-simple";
import QuickAbout from "../components/about/QuickAbout";
import Schedule from "./Schedule";
import { Link } from "react-router-dom";
function Home() {
  const aboutShortText = (
    <p>
      Welcome to FooFest! <br />
      <br /> We are an annual music festival that celebrates the best in music
      and entertainment. Our mission is to create a fun, safe, and
      memorable experience for everyone. We feature national and international
      acts, as well as smaller, up-and-coming acts.
      <br />
      <br /> We strive to provide a safe, welcoming environment and to reduce
      our carbon footprint. We also have plenty of other attractions including
      food and drinks, interactive activities, and more!
      <br />
      <br /> Join us for an unforgettable experience!
    </p>
  );


  const oneHour = new Date(
    new Date().setHours(new Date().getHours() + 100)
  ).toISOString();

  return (
    <>
      <section id="first-section">
        {/* <h1>Welcome To FOOFEST</h1> */}
        <Countdown targetDate={oneHour} />
        <Link to="/tickets"><button>Buy Now</button></Link>
        
      </section>
      <QuickAbout text={aboutShortText} />
      <Schedule />
    </>
  );
}

export default Home;
