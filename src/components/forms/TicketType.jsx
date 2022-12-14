import { useState } from "react";

function TicketType({ addToTicket, emptyField }) {
  const [regularTickets, setRegularTickets] = useState("");
  const [vipTickets, setVipTickets] = useState("");

  function handleInput(type, evt) {
    const value = evt.target.value;
    const regex = /^[\d]+$/g;

    switch (type) {
      case "regular":
        if (!value || regex.test(value)) {
          setRegularTickets(value);
          addToTicket("r", Number(value));
        }
        break;

      case "vip":
        if (!value || regex.test(value)) {
          setVipTickets(value);
          addToTicket("v", Number(value));
        }
        break;
    }
  }

  return (
    <>
      <div className="type-container">
        <div>
          <h3>TICKET TYPE</h3>
          {emptyField ? <p style={{ color: "red" }}>Please select a ticket type</p> : ""}
          <fieldset id="ticket-type">
            <label htmlFor="regular" className="regular-label">
              <span>REGULAR </span>
              <span>
                {" "}
                <b>799,-</b>
              </span>
            </label>
            <input
              onInput={(evt) => handleInput("regular", evt)}
              type="text"
              name="regular"
              id="regluar-amount"
              pattern="[0-9]"
              inputMode="numeric"
              placeholder="0"
              value={regularTickets}
            />
            <label htmlFor="vip" className="vip-label">
              <span>VIP</span>
              <span>
                {" "}
                <b> 1299,-</b>
              </span>
            </label>
            <input
              onInput={(evt) => handleInput("vip", evt)}
              type="text"
              name="vip"
              id="vip-amount"
              pattern="[0-9]"
              inputMode="numeric"
              placeholder="0"
              value={vipTickets}
            />
          </fieldset>
          {/* <div className="single-button">
            <button>NEXT</button>
          </div> */}
        </div>

        {/*  <div className="concert-img"></div> */}
      </div>
    </>
  );
}

export default TicketType;
