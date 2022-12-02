import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Tickets from "../pages/Tickets";
import Camping from "../pages/Camping";
//import Sustainability from "../pages/Sustainability";
import Home from "../pages/Home";
import "../styles/hamburger.scss"
import Schedule from "../pages/Schedule"
import {useState} from "react"

function Hamburger() {
const [changeIcon, setChangeIcon] = useState(true); 

function sodi(){

}

  return (
    <>
      <div className={changeIcon ? "" : "setBodyFixed"}>
        <div className="menuIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white"
            class="bi bi-alarm-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
          </svg>
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
          >
            {changeIcon ? "☰" : "X"}
          </button>
        </div>
        <Router>
          <nav className={changeIcon ? "right slideOut" : "left slideOut"}>
            <ul>
              <li>
                <Link to="/"></Link>
              </li>
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
                <a>LINE-UP</a>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <a>ABOUT</a>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <a>CONTACT</a>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <a>NEWS</a>
              </li>
              <li onClick={() => setChangeIcon(true)}>
                <a>SUSTAINABILITY</a>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/tickets" element={<Tickets />}></Route>
            <Route path="/camping" element={<Camping />}></Route>
            <Route path="/program" element={<Schedule />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default Hamburger;
