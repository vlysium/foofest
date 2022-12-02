import React from 'react'

function TicketInfo() {
  return (
    <>
      <h3>Ticket info</h3>
      <fieldset id="ticket-info">
        {/* <label htmlFor="fullname">Fullname</label> */}
        <input type="text" name="fullname" id="fullname" placeholder="FULLNAME" autoComplete="name" />
        {/*   <label htmlFor="email">Email</label> */}
        <input type="email" name="email" id="email" placeholder="EMAIL" autoComplete="email" />
        {/*    <label htmlFor="birthday">Birthday</label> */}
        <input type="date" name="birthday" id="birthday" placeholder="BIRTHDAY" />
      </fieldset>
      <div className="button-container">
        <button>BACK</button>
        <button>NEXT</button>
      </div>
    </>
  );
}

export default TicketInfo