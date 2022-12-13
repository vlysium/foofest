import React from "react";
import "../styles/home.scss";
import Countdown from "react-countdown-simple";
import QuickAbout from "../components/about/QuickAbout";
import Schedule from "./Schedule";
import { Link } from "react-router-dom";
import AboutCamping from "../components/camping/AboutCamping";
import NewsStories from "../components/news/NewsStories";
import data from "../assets/newstories.json";
import TicketsShop from "../components/shop/TicketsShop";
import Newsletter from "../components/Newsletter";

function Home({ articleIngo }) {
  const ShortText = {
    about: (
      <p>
        Welcome to FooFest! <br />
        <br /> We are an annual music festival that celebrates the best in music and entertainment. Our mission is to
        create a fun, safe, and memorable experience for everyone. We feature national and international acts, as well
        as smaller, up-and-coming acts.
        <br />
        <br /> We strive to provide a safe, welcoming environment and to reduce our carbon footprint. We also have
        plenty of other attractions including food and drinks, interactive activities, and more!
        <br />
        <br /> Join us for an unforgettable experience!
      </p>
    ),
    camping: (
      <p>
        Camping at FooFest offers great experiences – take advantage of the atmosphere, make friends, and enjoy the
        festival. We have 5 camping areas around the festival square, each with food, small shops, toilets, showers, and
        interactive activities. Add camping to your festival ticket for just 99,- for even more benefits!
      </p>
    ),
  };
  const stories = [];
  data.forEach((e) => {
    stories.unshift(e);
  });

  console.log(stories);
  const oneHour = new Date("2023-01-20").toISOString();

  return (
    <>
      <section id="first-section">
        <Countdown targetDate={oneHour} />
        <Link to="/tickets">
          <button className="btn">BUY NOW</button>
        </Link>
      </section>
      <Newsletter />
      <NewsStories
        articleIngo={articleIngo}
        stories={stories.slice(0, 3)}
        newsHeadline={
          <h2>
            <Link to="/news">FOOFEST NEWS</Link>
          </h2>
        }
      />
      <Schedule />
      <QuickAbout text={ShortText.about} fromHomepage={true} />
      <TicketsShop />
      <AboutCamping text={ShortText.camping} fromHomepage={true} />
    </>
  );
}

export default Home;
