
export default function CampingArea({ spots, addToTicket, ticket }) {
  //console.log(spots);
  return (
    <>
      <h3>CAMPING AREA</h3>

      <fieldset id="camping-area" className="scene-names">
        <div className="campContainer">
          <label htmlFor="no-camping">Without camping</label>
          <input
            onChange={(evt) => addToTicket("campingArea", evt.target.value)}
            type="radio"
            name="area"
            id="no-camping"
            pattern="[0-9]"
            inputMode="numeric"
            value="none"
          />
        </div>

        {spots.map((area, index) => (
          <div className="campContainer" key={index}>
            <label htmlFor={area.area}>{area.area}</label>
            <div className="avail-box">
              <p>{area.available}</p>
            </div>
            <input
              disabled={ticket.r + ticket.v > area.available}
              onChange={(evt) => addToTicket("campingArea", evt.target.value)}
              type="radio"
              name="area"
              id={area.area}
              pattern="[0-9]"
              inputMode="numeric"
              value={area.area}
            />
          </div>
        ))}
      </fieldset>
      <div className="button-container">
        <button>BACK</button>
        <button>NEXT</button>
      </div>
    </>
  );
}
