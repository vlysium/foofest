import React from 'react'

function TicketInfo({addBasket}) {
  
  return (
    <>
      <h3>Ticket info</h3>

      <fieldset id="ticket-info">
   
            <h5>TICKET</h5>
        <label htmlFor="fullname">
          Fullname <input type="text" name="fullname" id="fullname"autoComplete="name" />
        </label>

        <label htmlFor="email">
          Email <input type="email" name="email" id="email"  autoComplete="email" />
        </label>

        <label htmlFor="birthday">
          Birthday <input type="date" name="birthday" id="birthday" placeholder="BIRTHDAY" />
        </label>
      </fieldset>
      <div className="button-container">
        <button>BACK</button>
        <button>NEXT</button>
      </div>
    </>
  );
}

export default TicketInfo