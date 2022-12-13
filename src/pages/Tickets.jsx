import { useState, useEffect } from "react";
import { Button, message, Steps } from "antd";
import TicketType from "../components/forms/TicketType";
import "../styles/Tickets.scss";
import CampingArea from "../components/forms/CampingArea";
import Optionals from "../components/forms/Optionals";
import Payment from "../components/forms/Payment";
import TicketInfoList from "../components/forms/TicketInfoList";
import Countdown from "react-countdown-simple";
import { insertOrder, reserve, postData } from "../components/forms/db.js";


function Tickets() {
  const [spots, setSpots] = useState([]);
  const [ticket, setTicket] = useState({
    r: 0,
    v: 0,
    info: [],
    campingArea: "",
    greenCamping: 0,
    tentAmount:0,
  });
  const [current, setCurrent] = useState(0);
  const [emptyField, setEmptyField] = useState(false);
  const [payComplet, setPayComplet] = useState(false);
  const [reserveID, setReserveID] = useState("");
  const [supaData, setSupaData] = useState("");
  const [resComplet, setResComplet] = useState('')
  const [Timer, setTimer] = useState(false)

   const oneHour = new Date(
     new Date().setMinutes(new Date().getMinutes() +5)
   ).toISOString();
  /* 
    URL:
    "http://localhost:8080/available-spots"
    "https://vjr-foofest.fly.dev/available-spots"
  */
  const url = "http://localhost:8080/";

  // API
  useEffect(() => {
    async function getSpots() {
      const response = await fetch(url + "available-spots");
      const data = await response.json();
      setSpots(data);
      //console.log(data);
    }
    getSpots();
  }, [ticket]);

  // hvor mange billetter er valgt
  function addToTicket(property, value) {
    setTicket((old) => {
      const copy = { ...old };

      copy[property] = value;

      return copy;
    });
  }

  //RESERVESPOT
async function reserveSpot() {
    console.log("the reserveFunction has stareted");
    const payload = {
      area: ticket.campingArea,
      amount: ticket.r + ticket.v,
    };
     const response = await reserve(payload);
     setReserveID(response);
     setTimer(true)
     console.log(response);
  }
// FULL RESERVATION
 async function fullReservation () {
 const response = await insertOrder({ id: reserveID });
  setResComplet(response);
  console.log(response);
} 
// POST TO SUPABASE
 async function postToSupabase() {
  const payload = {
    regular: ticket.r,
    vip: ticket.v,
    campingArea: ticket.campingArea,
    greenCamping: ticket.greenCamping,
    tentAmount: ticket.tentAmount,
    ticketInfo: ticket.info,
  };
   const response = await postData(payload);
   setSupaData(response);
   console.log(response);
 } 

  // Progress tracker from Ant Design
  const steps = [
    {
      title: "",
      content: <TicketType addToTicket={addToTicket} emptyField={emptyField} />,
    },
    {
      title: "",
      content: (
        <TicketInfoList
          ticket={ticket}
          addToTicket={addToTicket}
          emptyField={emptyField}
        />
      ),
    },
    {
      title: "",
      content: (
        <CampingArea
          spots={spots}
          addToTicket={addToTicket}
          ticket={ticket}
          emptyField={emptyField}
        />
      ),
    },
    {
      title: "",
      content: <Optionals addToTicket={addToTicket} ticket={ticket} />,
    },
    {
      title: "",
      content: (
        <Payment
          payComplet={payComplet}
          ticket={ticket}
          addToTicket={addToTicket}
          emptyField={emptyField}
        />
      ),
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
  //skip the optionals tab if no camping is selected
  const skipOptions = () => {
    setCurrent(current + 2);
  }
  return (
    <section id="ticket-section">
      <form action="" id="tickets">
        <Steps current={current} items={items} />
        <div className="steps-content">
          {Timer ? (
            <Countdown
              targetDate={oneHour}
              renderer={({ minutes, seconds }) => (
                <div className="timer">
                  {minutes}:{seconds}
                </div>
              )}
            />
          ) : (
            ""
          )}
          {steps[current].content}
        </div>
        <div
          className={
            current > 0 ? "steps-action two-button" : "steps-action one-button"
          }
        >
          {current > 0 && (
            <Button onClick={() => prev()}>
              <b> PREVIOUS </b>
            </Button>
          )}
          {current === 0 && (
            //ticket Type
            <Button
              type="primary"
              onClick={() => {
                setPayComplet(false);
                if (ticket.r === 0 && ticket.v === 0) {
                  setEmptyField(true);
                } else {
                  setEmptyField(false);
                  next();
                }
              }}
            >
              <b>NEXT</b>
            </Button>
          )}
          {current === 2 && (
            //Camping Area
            <Button
              type="primary"
              onClick={() => {
                if (ticket.campingArea === undefined) {
                  setEmptyField(true);
                } else {
                  if (ticket.campingArea === "none") {
                    setEmptyField(false);
                    //reserveSpot();
                    skipOptions();
                  } else {
                    setEmptyField(false);
                    reserveSpot();
                    next();
                  }
                }
              }}
            >
              <b>NEXT</b>
            </Button>
          )}
          {current === 3 && (
            // optionals
            <Button type="primary" onClick={() => next()}>
              <b>NEXT</b>
            </Button>
          )}
          {current === 1 && (
            //ticket Info
            <Button
              type="primary"
              onClick={() => {
                if (ticket.info === undefined) {
                  console.log("pick an area");
                  setEmptyField(true);
                } else {
                  setEmptyField(true);
                  let counter = ticket.r + ticket.v;
                  ticket.info.forEach((element) => {
                    if (
                      element.fullname == "" ||
                      element.email == "" ||
                      element.birthday == ""
                    ) {
                      console.log("not all fields are filled in");
                    } else if (
                      element.fullname != "" &&
                      (element.email != "") & (element.birthday != "")
                    ) {
                      console.log((counter -= 1));
                      console.log("All fields are now filled in");
                      if (counter > 0) {
                        console.log(
                          "there is still " + counter + "fields left"
                        );
                      } else if (counter === 0) {
                        setEmptyField(false);
                        next();
                      }
                    }
                  });
                }
              }}
            >
              <b>NEXT</b>
            </Button>
          )}
          {current === steps.length - 1 && (
            //paymeny
            <Button
              type="primary"
              onClick={
                () => {
                  if (ticket.payment === undefined) {
                    setEmptyField(true);
                    console.log("credit info not there");
                  } else if (ticket.payment[0].number.toString().length < 16) {
                    setEmptyField(true);
                    console.log("please fill out the creditnumber");
                  } else if (ticket.payment[0].day.toString().length < 2) {
                    setEmptyField(true);
                    console.log("month");
                  } else if (ticket.payment[0].month.toString().length < 2) {
                    setEmptyField(true);
                    console.log("year");
                  } else if (ticket.payment[0].cvc.toString().length < 3) {
                    setEmptyField(true);
                    console.log("cvc");
                  } else {
                    setEmptyField(false);
                    setPayComplet(true);
                    fullReservation();
                    postToSupabase();
                    setTimer(false)
                    message.success("Processing complete!");
                  }
                } /* message.success("Processing complete!") */
              }
            >
              <b>DONE</b>
            </Button>
          )}
        </div>
      </form>
      <div className="concert-img"></div>
    </section>
  );
}

export default Tickets;
