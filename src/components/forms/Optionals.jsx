function Optionals({ ticket, addToTicket }) {
  return (
    <>
      <h3>CAMPING OPTIONALS</h3>
      <div className="optionals-wrapper">
        <fieldset className="optionals">
          <label htmlFor="green-camping" className="eco-camping">
            <span>Green camping</span> <span>249,-</span>
          </label>
          <input
            value={249}
            disabled={ticket.campingArea === "none"}
            type="checkbox"
            name="green-camping"
            id="green-camping"
            onChange={(evt) => addToTicket("greenCamping", Number(evt.target.value))}
          />
          <span className="checkmark"></span>
        </fieldset>
        <p>Get the crew to set up your tents</p>
        <fieldset className="optionals">
          <label htmlFor="two-person" className="two-camp">
            <span>{ticket.r + ticket.v} person camp</span> <span>{(ticket.r + ticket.v) * 100 + 99},-</span>
          </label>
          <input
            value={(ticket.r + ticket.v) * 100 + 99}
            disabled={ticket.r + ticket.v < 2}
            type="checkbox"
            name="two-person"
            id="two-person"
            onChange={(evt) => addToTicket("tentAmount", Number(evt.target.value))}
          />
          <span className="checkmark"></span>
          {/* <label htmlFor="three-person" className="three-camp">
          <span>3 person camp</span> <span> 399,-</span>
        </label>
        <input type="checkbox" name="three-person" id="green-campingthree-person" /> */}
        </fieldset>
        {/*  <div className="button-container">
        <button>BACK</button>
        <button>NEXT</button>
      </div> */}
      </div>
    </>
  );
}

export default Optionals;
