import React from 'react'

function TicketType() {
  return (
    <>
      <div className="type-container">
        <div>
          <h3>TICKETTYPE</h3>
          <fieldset id="ticket-type">
            <label htmlFor="regular">REGULAR 799,-</label>
            <input type="text" name="regular" id="regluar-amount" pattern="[0-9]" inputMode="numeric" required />
            <label htmlFor="vip">VIP 1299,-</label>
            <input type="text" name="vip" id="vip-amount" pattern="[0-9]" inputMode="numeric" required />
            <button>NEXT</button>
          </fieldset>
        </div>

        <div className="concert-img">{/* <img src="/public/concert.png" alt="" /> */}</div>
      </div>
    </>
  );
}



export default TicketType