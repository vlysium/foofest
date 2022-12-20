import { useState, useEffect, } from "react";
import { Button, message, Steps } from "antd";
import TicketType from "../components/forms/TicketType";
import "../styles/Tickets.scss";
import CampingArea from "../components/forms/CampingArea";
import Optionals from "../components/forms/Optionals";
import Payment from "../components/forms/Payment";
import TicketInfoList from "../components/forms/TicketInfoList";
import CD, { zeroPad } from "react-countdown";
import { insertOrder, reserve, postData } from "../components/forms/db.js";

function Tickets() {
  // Arrray of availabel spots at the festival
  const [spots, setSpots] = useState([]);
  // Checkout total, keeps track of the filled in ticket infomation
  const [ticket, setTicket] = useState({
    r: 0,
    v: 0,
    info: [],
    campingArea: "",
    greenCamping: 0,
    tentAmount: 0,
  });
  // The current step to which the Ant Design Step counter is on
  const [current, setCurrent] = useState(0);
  // Validate, if a field is not filled in. It will display a red error message
  const [emptyField, setEmptyField] = useState(false);
  // check if the payment has been forfilled, if so display thank you note
  const [payComplet, setPayComplet] = useState(false);
  // get the reservation ID
  const [reserveID, setReserveID] = useState("");
  // post data to Supabase
  const [supaData, setSupaData] = useState("");
  // Request Full Reservation
  const [resComplet, setResComplet] = useState("");
  // Check if timer needs to start
  const [Timer, setTimer] = useState(false);
  //refresh page
   const [counterTime, setcounterTime] = useState(false);
  // Timer length
  //const [oneHour, setOneHour] = useState();
  /* 
    URL:
    "http://localhost:8080/available-spots"
    "https://vjr-foofest.fly.dev/available-spots"
  */
  const url = "https://vjr-foofest.fly.dev/";

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
    //console.log("the reserveFunction has stareted");
    const payload = {
      area: ticket.campingArea,
      amount: ticket.r + ticket.v,
    };
    const response = await reserve(payload);
    setReserveID(response);
 
    setTimer(true);
    //console.log(response);
    //ifTimeRunsOutTheWorldEnds();
  }
  // FULL RESERVATION
  async function fullReservation() {
    const response = await insertOrder({ id: reserveID });
    setResComplet(response);
    //console.log(response);
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
    //console.log(response);
  }
  //refresh


/*   function ifTimeRunsOutTheWorldEnds() {
    setTimeout(() => {
      console.log(Timer);
      if (Timer == true) {
        console.log("also here");
        location.reload();
      }
    }, 300000);
  } */

  // Progress tracker from Ant Design
  const steps = [
    {
      title: "",
      content: <TicketType addToTicket={addToTicket} emptyField={emptyField} />,
    },
    {
      title: "",
      content: <TicketInfoList ticket={ticket} addToTicket={addToTicket} emptyField={emptyField} />,
    },
    {
      title: "",
      content: <CampingArea spots={spots} addToTicket={addToTicket} ticket={ticket} emptyField={emptyField} />,
    },
    {
      title: "",
      content: <Optionals addToTicket={addToTicket} ticket={ticket} />,
    },
    {
      title: "",
      content: <Payment payComplet={payComplet} ticket={ticket} addToTicket={addToTicket} emptyField={emptyField} />,
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
  
  };

  const renderer = ({minutes, seconds}) => {
    return (
      <span className="ticket-timer">
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  }
  return (
    <section id="ticket-section">
      <form action="" id="tickets">
        <Steps className={payComplet ? "hidden" : null} current={current} items={items} />
        <div className="steps-content">
          {Timer ? (
            <CD 
            onComplete={()=> {  if (Timer === true) {
              window.location.reload(false);
            }} }
            date = {Date.now() + 30000}
            renderer={renderer}
        
            />
          ) : (
            ""
          )}
          {steps[current].content}
        </div>
        <div className={!payComplet ? (current > 0 ? "steps-action two-button" : "steps-action one-button") : "hidden"}>
          {current > 0 && (
            <Button className="btn" onClick={() => prev()}>
              PREVIOUS
            </Button>
          )}
          {current === 0 && (
            //ticket Type
            <Button
              className="btn"
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
              NEXT
            </Button>
          )}
          {current === 2 && (
            //Camping Area
            <Button
              className="btn"
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
              NEXT
            </Button>
          )}
          {current === 3 && (
            // optionals
            <Button className="btn" type="primary" onClick={() => next()}>
              NEXT
            </Button>
          )}
          {current === 1 && (
            //ticket Info
            <Button
              className="btn"
              type="primary"
              onClick={() => {
                if (ticket.info === undefined) {
                  //console.log("pick an area");
                  setEmptyField(true);
                } else {
                  setEmptyField(true);
                  let counter = ticket.r + ticket.v;
                  ticket.info.forEach((element) => {
                    if (element.fullname == "" || element.email == "" || element.birthday == "") {
                      //console.log("not all fields are filled in");
                    } else if (element.fullname != "" && /\S+@\S+\.\S+/.test(element.email) && element.birthday != "") {
                      counter -= 1;
                      //console.log("All fields are now filled in");
                      if (counter > 0) {
                        //console.log("there is still " + counter + "fields left");
                      } else if (counter === 0) {
                        setEmptyField(false);
                        next();
                      }
                    }
                  });
                }
              }}
            >
              NEXT
            </Button>
          )}
          {current === steps.length - 1 && (
            //payment
            <Button
              className="btn"
              type="primary"
              onClick={
                () => {
                  if (ticket.payment === undefined) {
                    setEmptyField(true);
                    //console.log("credit info not there");
                  } else if (ticket.payment[0].number.toString().length < 16) {
                    setEmptyField(true);
                    //console.log("please fill out the creditnumber");
                  } else if (ticket.payment[0].day.toString().length < 2) {
                    setEmptyField(true);
                    //console.log("month");
                  } else if (ticket.payment[0].month.toString().length < 2) {
                    setEmptyField(true);
                    //console.log("year");
                  } else if (ticket.payment[0].cvc.toString().length < 3) {
                    setEmptyField(true);
                    //console.log("cvc");
                  } else {
                    setEmptyField(false);
                    setPayComplet(true);
                    fullReservation();
                    postToSupabase();
                    setTimer(false);
                    message.success("Processing complete!");
                  }
                } /* message.success("Processing complete!") */
              }
            >
              DONE
            </Button>
          )}
        </div>
      </form>
      <div className="concert-img-wrapper">
        <div className="concert-img"></div>
      </div>
    </section>
  );
}

export default Tickets;
