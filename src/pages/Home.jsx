import React from "react";
import "../styles/home.scss";
import Countdown from "react-countdown-simple";
import About from "./About";
import Schedule from "./Schedule";
import { Link } from "react-router-dom";
function Home() {
  const oneHour = new Date(
    new Date().setHours(new Date().getHours() + 100)
  ).toISOString();

  return (
    <>
      <section id="first-section">
        <Countdown targetDate={oneHour} />
        <Link to="/tickets"><button>Buy Now</button></Link>
        
      </section>
      <About />
      <Schedule />
    </>
  );
}

export default Home;
