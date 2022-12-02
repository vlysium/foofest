import React from 'react'

function TicketInfo() {
  return (
    <>
      <h3>Ticket info</h3>
      <fieldset id="ticket-info">
        {/* <label htmlFor="fullname">Fullname</label> */}
        <input type="text" name="fullname" id="fullname" placeholder="FULLNAME" required autoComplete="name" />
        {/*   <label htmlFor="email">Email</label> */}
        <input type="email" name="email" id="email" placeholder="EMAIL" required autoComplete="email" />
        {/*    <label htmlFor="birthday">Birthday</label> */}
        <input type="date" name="birthday" id="birthday" placeholder="BIRTHDAY" required />
      </fieldset>
      <button>BACK</button>
      <button>NEXT</button>+
      
    </>
  );
}

export default TicketInfo