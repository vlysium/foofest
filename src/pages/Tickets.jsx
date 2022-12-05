import { useState, useEffect } from "react";

import TicketType from "../components/TicketType";
import "../styles/Tickets.scss";
import CampingArea from "../components/CampingArea";
import Optionals from "../components/Optionals";
import TicketInfo from "../components/TicketInfo";
import Payment from "../components/Payment";

function Tickets() {
  const [spots, setSpots] = useState([]);

  /*
    URL:
    "http://localhost:8080/available-spots"
    "https://vjr-foofest.fly.dev/available-spots"
  */
  const url = "http://localhost:8080/available-spots";

  useEffect(() => {
    async function getSpots() {
      const response = await fetch(url);
      const data = await response.json();
      setSpots(data);
      console.log(data);
    }
    getSpots();
  }, []);

  return (
    <section id="ticket-section">
      <form action="" id="tickets">
        <TicketType />
        <CampingArea />
        <Optionals />
        <TicketInfo />
        <Payment />
      </form>
      <div className="concert-img"></div>
    </section>
  );
}

export default Tickets;
