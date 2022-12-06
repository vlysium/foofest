function Optionals() {
  return (
    <>
      <h3>Camping Optionals</h3>
      <fieldset className="optionals">
        <label htmlFor="green-camping" className="eco-camping">
          <span>Green camping</span> <span>249,-</span>
        </label>
        <input type="checkbox" name="green-camping" id="green-camping" />
      </fieldset>
      <p>Get the crew to set up your tents</p>
      <fieldset className="optionals">
        <label htmlFor="two-person" className="two-camp">
          <span>2 person camp</span> <span>299,-</span>
        </label>
        <input type="checkbox" name="two-person" id="two-person" />
        <label htmlFor="three-person" className="three-camp">
          <span>3 person camp</span> <span> 399,-</span>
        </label>
        <input type="checkbox" name="three-person" id="green-campingthree-person" />
      </fieldset>
      <div className="button-container">
        <button>BACK</button>
        <button>NEXT</button>
      </div>
    </>
  );
}

export default Optionals;
