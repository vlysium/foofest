
export default function CampingArea({spots}) {
  console.log(spots)
  return (
    <>
      <h3>CAMPING AREA</h3>

      <fieldset id="camping-area" className="scene-names">
      
        <label htmlFor="svartheim">Svartheim</label>
        <div className="avail-box">
          <p>22</p>
        </div>
        <input type="text" name="svartheim" id="svartheim" pattern="[0-9]" inputMode="numeric" />

        <label htmlFor="nilfheim">Nilfheim</label>
        <div className="avail-box">
          <p>22</p>
        </div>
        <input type="text" name="nilfheim" id="nilfheim" pattern="[0-9]" inputMode="numeric" />

        <label htmlFor="helheim">Helheim</label>
        <div className="avail-box">
          <p>22</p>
        </div>
        <input type="text" name="helheim" id="helheim" pattern="[0-9]" inputMode="numeric" />

        <label htmlFor="muspelheim">Muspelheim</label>
        <div className="avail-box">
          <p>22</p>
        </div>
        <input type="text" name="muspelheim" id="muspelheim" pattern="[0-9]" inputMode="numeric" />

        <label htmlFor="alfheim">Alfheim</label>
        <div className="avail-box">
          <p>22</p>
        </div>
        <input type="text" name="alfheim" id="alfheim" pattern="[0-9]" inputMode="numeric" />
      </fieldset>
      <div className="button-container">
      
        <button>BACK</button>
        <button>NEXT</button>
      </div>
    </>
  );
}
