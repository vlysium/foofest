

function Optionals() {
  return (
    <>
      <h3>Camping Optionals</h3>
      <fieldset className="optionals">
        <label htmlFor="green-camping">Green camping 249,-</label>
        <input type="radio" name="green-camping" id="green-camping" />
      </fieldset>
      <p>Get the crew to set up your tents</p>
      <fieldset className="optionals">
        <label htmlFor="two-person">2 person camp 299,-</label>
        <input type="radio" name="two-person" id="two-person" />
        <label htmlFor="three-person">3 person camp 399,-</label>
        <input type="radio" name="three-person" id="green-campingthree-person" />
      </fieldset>
      <button>BACK</button>
      <button>NEXT</button>
    </>
  );
}

export default Optionals