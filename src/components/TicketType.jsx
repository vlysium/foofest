import React from 'react'

function TicketType() {
  return (
    <>
      <h3>TICKETTYPE</h3>
      <form action="">
        <fieldset id="ticket-type">
          <label htmlFor="regular">REGULAR 799,-</label>
          <input type="text" name="regular" id="regluar-amount" pattern="[0-9]" inputMode="numeric" required />
          <label htmlFor="vip">VIP 1299,-</label>
          <input type="text" name="vip" id="vip-amount" pattern="[0-9]" inputMode="numeric" required />
        </fieldset>
        <button>NEXT</button>
        {/* <label htmlFor="regular">REGULAR 799,-</label>
        <input type="text" name="regular" id="regluar-amount" pattern="[0-9]" inputMode="numeric" required />
        <label htmlFor="vip">VIP 1299,-</label>
        <input type="text" name="vip" id="vip-amount" pattern="[0-9]" inputMode="numeric" required />
       
          <button>NEXT</button>
      */}
      </form>
    </>
  );
}



export default TicketType