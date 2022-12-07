import { useState, useEffect } from "react";
import { Button, message, Steps } from "antd";
import TicketType from "../components/forms/TicketType";
import "../styles/Tickets.scss";
import CampingArea from "../components/forms/CampingArea";
import Optionals from "../components/forms/Optionals";
import Payment from "../components/forms/Payment";
import TicketInfoList from "../components/forms/TicketInfoList";

function Tickets() {
  const [spots, setSpots] = useState([]);
  const [ ticket, setTicket ] = useState({r: 0, v: 0});
  const [current, setCurrent] = useState(0);

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

// Progress tracker from Ant Design
const steps = [
  {
    title: "",
    content: <TicketType addToTicket={addToTicket} />,
  },
  {
    title: "",
    content: (
      <CampingArea spots={spots} addToTicket={addToTicket} ticket={ticket} />
    ),
  },
  {
    title: "",
    content: <Optionals addToTicket={addToTicket} ticket={ticket} />,
  },
  {
    title: "",
    content: <TicketInfoList ticket={ticket} addToTicket={addToTicket}/>,
  },
  {
    title: "",
    content: <Payment ticket={ticket} />,
  },
];

  //const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));




  return (
    <section id="ticket-section">
      <form action="" id="tickets">
        <Steps current={current} items={items} />
        <div className="steps-content">{steps[current].content}</div>
        <div
          className={
            current > 0 ? "steps-action two-button" : "steps-action one-button"
          }
        >
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
        </div>
        {/* <TicketType addToTicket={addToTicket} />
        <CampingArea spots={spots} addToTicket={addToTicket} ticket={ticket} />
        <Optionals addToTicket={addToTicket} ticket={ticket} />
        <TicketInfoList ticket={ticket} addToTicket={addToTicket} />

        <Payment ticket={ticket} /> */}
      </form>
      <div className="concert-img"></div>
    </section>
  );
}

export default Tickets;
