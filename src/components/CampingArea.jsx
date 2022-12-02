
export default function CampingArea() {
  return (
    <>
      <h3>CAMPING AREA</h3>

      <fieldset id="camping-area" className="scene-names">
        {/*   <label htmlFor="no-camping">
          Whitout camping
          <input type="radio" name="no-camping" id="no-camping" />
        </label> */}
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
        
        <button>BACK</button>
        <button>NEXT</button>
      </fieldset>
    </>
  );
}
