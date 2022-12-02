import React from 'react'

function TicketType() {
  return (
    <>
      <div className="type-container">
        <div>
          <h3>TICKETTYPE</h3>
          <fieldset id="ticket-type">
            <label htmlFor="regular" className="regular-label">
              <span>REGULAR </span>
              <span>799,-</span>
            </label>
            <input type="text" name="regular" id="regluar-amount" pattern="[0-9]" inputMode="numeric" required />
            <label htmlFor="vip" className="vip-label">
              <span>VIP,-</span>
              <span>1299,-</span>
            </label>
            <input type="text" name="vip" id="vip-amount" pattern="[0-9]" inputMode="numeric" required />
          </fieldset>
          <div className='single-button'>
            <button>NEXT</button>
          </div>
         
        </div>

        <div className="concert-img">{/* <img src="/public/concert.png" alt="" /> */}</div>
      </div>
    </>
  );
}



export default TicketType