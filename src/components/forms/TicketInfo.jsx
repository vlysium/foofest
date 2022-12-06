import React from 'react'

function TicketInfo({addToTicketBasket, type}) {
  
  return (
    <div className="ticketInfo">
      <h3>Ticket info</h3>

      <fieldset id="ticket-info">
        <h5>
          <span className='type'>{type}</span> TICKET
        </h5>
        <label htmlFor="fullname">
          Fullname <input type="text" name="fullname" className="fullname" autoComplete="name" onChange={(evt) => addToTicket("fullname", evt.target.value)} />
        </label>

        <label htmlFor="email">
          Email <input type="email" name="email" className="email" autoComplete="email" />
        </label>

        <label htmlFor="birthday">
          Birthday <input type="date" name="birthday" className="birthday" placeholder="BIRTHDAY" />
        </label>
      </fieldset>
      {/*  <div className="button-container">
        <button>BACK</button>
        <button>NEXT</button>
      </div> */}
    </div>
  );
}

export default TicketInfo