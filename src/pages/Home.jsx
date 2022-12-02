import React from "react";
import "../styles/home.scss";
import Countdown from "react-countdown-simple";
import About from "./About";

function Home() {
  const oneHour = new Date(
    new Date().setHours(new Date().getHours() + 100)
  ).toISOString();

  return (
    <>
      <section id="first-section">
        <Countdown targetDate={oneHour} />
        <button>Buy Now</button>
      </section>
      <About/>
    </>
  );
}

export default Home;
