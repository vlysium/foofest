import { useState, useEffect } from "react";

import TicketType from "../components/forms/TicketType";
import "../styles/Tickets.scss";
import CampingArea from "../components/forms/CampingArea";
import Optionals from "../components/forms/Optionals";
import TicketInfo from "../components/forms/TicketInfo";
import Payment from "../components/forms/Payment";

function Tickets() {
  const [spots, setSpots] = useState([]);
  const [ addBasket, setAddBasket ] = useState({r: 0, v: 0});
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

  function addTickets (event) {
  
    if (event.target.id === "regluar-amount") {
      console.log()
      addBasket.r = event.target.value
    } else{
      addBasket.v = event.target.value
    }
    
  }

  return (
    <section id="ticket-section">
      <button onClick={()=>{console.log(addBasket);}}>Check ticket info</button>
      <form action="" id="tickets">
        <TicketType addTickets={addTickets} />
        <CampingArea />
        <Optionals />
        <TicketInfo />
        <Payment addBasket={addBasket} />
      </form>
      <div className="concert-img"></div>
    </section>
  );
}

export default Tickets;
