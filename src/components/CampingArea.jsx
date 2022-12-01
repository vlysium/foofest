
export default function CampingArea() {
  return (
    <>
      <form action="" id="camping-area">
        <h3>CAMPING AREA</h3>
        {/*   <label htmlFor="no-camping">
          No camping wanted
          <input type="radio" name="no-camping" id="no-camping" />
        </label> */}
        <fieldset className="scene-names">
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

        <button>BACK</button>
        <button>NEXT</button>
      </form>
    </>
  );
}
/*
0	
area	"Svartheim"
spots	400
available	343
1	
area	"Nilfheim"
spots	300
available	111
2	
area	"Helheim"
spots	100
available	81
3	
area	"Muspelheim"
spots	200
available	7
4	
area	"Alfheim"
spots	250
available	162
*/
