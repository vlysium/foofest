function TicketType({ addToTicket, emptyField }) {
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
              onChange={(evt) => addToTicket("r", Number(evt.target.value))}
              type="text"
              name="regular"
              id="regluar-amount"
              pattern="[0-9]"
              inputMode="numeric"
              placeholder="0"
            />
            <label htmlFor="vip" className="vip-label">
              <span>VIP</span>
              <span>
                {" "}
                <b> 1299,-</b>
              </span>
            </label>
            <input
              onChange={(evt) => addToTicket("v", Number(evt.target.value))}
              type="text"
              name="vip"
              id="vip-amount"
              pattern="[0-9]"
              inputMode="numeric"
              placeholder="0"
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
