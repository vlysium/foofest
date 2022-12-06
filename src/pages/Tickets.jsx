import { useState, useEffect } from "react";

import TicketType from "../components/forms/TicketType";
import "../styles/Tickets.scss";
import CampingArea from "../components/forms/CampingArea";
import Optionals from "../components/forms/Optionals";
import TicketInfo from "../components/forms/TicketInfo";
import Payment from "../components/forms/Payment";

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



    /* if (event.target.id === "regluar-amount") {
      console.log()
      ticket.r = event.target.value
    } else{
      ticket.v = event.target.value
    } */
    
  }
  // er der valgt camping og hvilken.
  /* function addCampingArea(event){
   ticket.area = event.target.id;
    console.log(ticket)

  } */

  return (
    <section id="ticket-section">
      <button
        onClick={() => {
          console.log(ticket);
        }}
      >
        Check ticket info
      </button>
      <form action="" id="tickets">
        <TicketType addToTicket={addToTicket} />
        <CampingArea spots={spots} addToTicket={addToTicket} ticket={ticket} />
        <Optionals />
        {[...Array(ticket.r+ticket.v).keys()].map((info) => (
          <TicketInfo ticket={ticket} />
        ))}
        <Payment ticket={ticket} />
      </form>
      <div className="concert-img"></div>
    </section>
  );
}

export default Tickets;
