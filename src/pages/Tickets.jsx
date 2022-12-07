import { useState, useEffect } from "react";

import TicketType from "../components/forms/TicketType";
import "../styles/Tickets.scss";
import CampingArea from "../components/forms/CampingArea";
import Optionals from "../components/forms/Optionals";
import Payment from "../components/forms/Payment";
import TicketInfoList from "../components/forms/TicketInfoList";

function Tickets() {
  const [spots, setSpots] = useState([]);
  const [ ticket, setTicket ] = useState({r: 0, v: 0});
  //const [campingArea, setCampingArea] = useState([]);
  /*
    URL:
    "http://localhost:8080/available-spots"
    "https://vjr-foofest.fly.dev/available-spots"
  */
  const url = "http://localhost:8080/available-spots";

  // API
  useEffect(() => {
    async function getSpots() {
      const response = await fetch(url);
      const data = await response.json();
      setSpots(data);
      //console.log(data);
    }
    getSpots();
  }, []);

// hvor mange billetter er valgt
  function addToTicket (property, value) {

    setTicket((old) => {
        const copy = { ...old };

        copy[property] = value;

        return copy;
    })
  }


  return (
    <section id="ticket-section">
      <form action="" id="tickets">
        <TicketType addToTicket={addToTicket} />
        <CampingArea spots={spots} addToTicket={addToTicket} ticket={ticket} />
        <Optionals addToTicket={addToTicket} ticket={ticket} />
        <TicketInfoList ticket={ticket} addToTicket={addToTicket} />

        <Payment ticket={ticket} />
      </form>
      <div className="concert-img"></div>
    </section>
  );
}

export default Tickets;
