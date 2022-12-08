import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Tickets from "../pages/Tickets";
import Camping from "../pages/Camping";
import About from "../pages/About";
import Home from "../pages/Home";
import "../styles/hamburger.scss"
import Schedule from "../pages/Schedule"
import Footer from "./Footer";
import {useState, useEffect} from "react"
import Error from "../pages/Error";
import Jobs from "../pages/Jobs";
import News from "../pages/News";
import Article from "./news/Article";
function Hamburger() {
const [changeIcon, setChangeIcon] = useState(true); 
const [hideEl, setHideEl] = useState("")
const [showEl, setShowEl] = useState("")
const [onMobile, setOnMobile] = useState(true)
const [articleContent, getArticleContent] = useState({})


// Place a display: none; class on the slideout element, but with a delay of 0,3s. The same lenght of time as the slideout animation
  useEffect(() => {
     window.addEventListener("resize", scrollHandler);

    if(changeIcon === true) {
      const timer = setTimeout(() => {
        console.log("hide")
        //the "a" & "b" are use the reset the states when switching between them. otherwise the state would not change when clicked multiple times.
        setShowEl("a")
        setHideEl("hide");
      }, 300);
      return () => {
        hideEl;
        window.removeEventListener("resize", scrollHandler);
      } 
    } else {
      setTimeout(() => {
        console.log("nothing")
        setHideEl("b");
        setShowEl("left");
      }, 10);
      return () => {
        showEl;
        window.removeEventListener("resize", scrollHandler);
      }
    }
  }, [changeIcon]);
  
const scrollHandler = () => {
  const windowWidth = document.querySelector("body").clientWidth;
  if(windowWidth > 800) {
    setOnMobile(true)
  } else{
    setOnMobile(false);
  }
}


  return (
    <>
      <div className={changeIcon ? "" : "setBodyFixed"}>
        <Router>
          <div className="menuIcon">
            <Link onClick={() => setChangeIcon(true)} to="/">
              {onMobile ? (
                <h3>FOOFEST</h3>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#f515c1"
                  class="bi bi-alarm-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                </svg>
              )}
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
              {changeIcon ? "☰" : "X"}
            </button>
          </div>

          <nav
            className={
              changeIcon ? `right slideOut ${hideEl}` : `slideOut ${showEl}`
            }
          >
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
                <Link to="/about">ABOUT</Link>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <Link to="/jobs">JOBS</Link>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <a>CONTACT</a>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <Link to="/news">NEWS</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/tickets" element={<Tickets />}></Route>
            <Route path="/camping" element={<Camping />}></Route>
            <Route path="/program" element={<Schedule />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/jobs" element={<Jobs />}></Route>
            <Route path="/news/*" element={<News getArticleContent={getArticleContent}/>}>
              <Route path="post" element={<Article />}></Route>
            </Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default Hamburger;

