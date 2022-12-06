
export default function CampingArea({ spots, addCampingArea, addBasket}) {
  //console.log(spots);
  return (
    <>
      <h3>CAMPING AREA</h3>

      <fieldset id="camping-area" className="scene-names">
        <label htmlFor="no-camping">Without camping</label>
        <input
          onChange={() => addCampingArea(event)}
          type="radio"
          name="area"
          id="no-camping"
          pattern="[0-9]"
          inputMode="numeric"
        />

        {spots.map((area, index) => (
          <>
            <label htmlFor={area.area}>{area.area}</label>
            <div className="avail-box">
              <p>{area.available}</p>
            </div>
            <input
              onChange={() => addCampingArea(event)}
              type="radio"
              name="area"
              id={area.area}
              pattern="[0-9]"
              inputMode="numeric"
            />
          </>
        ))}
      </fieldset>
      <div className="button-container">
        <button>BACK</button>
        <button>NEXT</button>
      </div>
    </>
  );
}
