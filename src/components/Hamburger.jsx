import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
//import Tickets from "../pages/Tickets";
//import Camping from "../pages/Camping";
import About from "../pages/About";
import Home from "../pages/Home";
import "../styles/hamburger.scss";
//import Schedule from "../pages/Schedule";
//import Footer from "./Footer";
import { useState, useEffect } from "react";
import Error from "../pages/Error";
import Jobs from "../pages/Jobs";
//import News from "../pages/News";
import Article from "./news/Article";
import ScrollToTop from "../utils/ScrollToTop";
//Lazy loading components
const Schedule = React.lazy(() => import("../pages/Schedule"));
const Tickets = React.lazy(() => import("../pages/Tickets"));
const Camping = React.lazy(() => import("../pages/Camping"));
const News = React.lazy(() => import("../pages/News"));
const Footer = React.lazy(() => import("./Footer"));

function Hamburger() {
  const [changeIcon, setChangeIcon] = useState(true);
  const [hideEl, setHideEl] = useState("");
  const [showEl, setShowEl] = useState("");
  const [onMobile, setOnMobile] = useState(true);
  const [articleContent, getArticleContent] = useState({});


  
  // Place a display: none; class on the slideout element, but with a delay of 0,3s. The same lenght of time as the slideout animation
  useEffect(() => {
    window.addEventListener("resize", scrollHandler);

    if (changeIcon === true) {
      const timer = setTimeout(() => {
        //console.log("hide");
        //the "a" & "b" are use the reset the states when switching between them. otherwise the state would not change when clicked multiple times.
        setShowEl("a");
        setHideEl("hide");
      }, 300);
      return () => {
        hideEl;
        window.removeEventListener("resize", scrollHandler);
      };
    } else {
      setTimeout(() => {
        //console.log("nothing");
        setHideEl("b");
        setShowEl("left");
      }, 10);
      return () => {
        showEl;
        window.removeEventListener("resize", scrollHandler);
      };
    }
  }, [changeIcon]);

  const scrollHandler = () => {
    const windowWidth = document.querySelector("body").clientWidth;
    if (windowWidth > 800) {
      setOnMobile(true);
    } else {
      setOnMobile(false);
    }
  };
  // Receives the Article infomation from the News page and sendes it to the react router component <Article/>
  function articleIngo(story, url, headline, image) {
    getArticleContent((old) => (old = { story: story, url: url, headline: headline, image: image }));
  }

  return (
    <>
    {/*Suspense is used in incoporeration with lazy() */}
    <Suspense fallback={<div>Loading...</div>}>
      <div className={changeIcon ? "" : "setBodyFixed"}>
        <Router>
          <ScrollToTop />
          <div className="menuIcon">
            <Link onClick={() => setChangeIcon(true)} to="/">
              <h3 className="menu-logo">FOOFEST</h3>
             
            </Link>
            <button
              onClick={() =>
                setChangeIcon(() => {
                  if (changeIcon === true) {
                    return false;
                  }
                  {
                    return true;
                  }
                })
              }
              className={changeIcon ? "" : "changeFont"}
            >
              {changeIcon ? "☰" : "×"}
            </button>
          </div>

          <nav className={changeIcon ? `right slideOut ${hideEl}` : `slideOut ${showEl}`}>
            <ul>
              <li onClick={() => setChangeIcon(true)}>
                <Link to="/tickets">TICKETS</Link>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <Link to="/camping">CAMPING</Link>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <Link to="/program">PROGRAM</Link>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <Link to="/news">NEWS</Link>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <Link to="/jobs">JOBS</Link>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <Link to="/about">ABOUT</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/tickets" element={<Tickets />}></Route>
            <Route path="/camping" element={<Camping />}></Route>
            <Route path="/program" element={<Schedule />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/jobs" element={<Jobs />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path={`news/:id`} element={<Article />}></Route>

            {/* <Route
              path={`/news/${articleContent.url}`}
              element={
                <Article headline={articleContent.headline} story={articleContent.story} image={articleContent.image} />
              }
            ></Route> */}
            <Route path="/" element={<Home articleIngo={articleIngo} />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </div></Suspense>
    </>
  );
}

export default Hamburger;
