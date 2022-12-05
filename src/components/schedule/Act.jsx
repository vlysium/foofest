function Act({ act, index, bandsData, isBreak }) {
  function displayBandDetails() {
    // if it is not a break
    if (!isBreak) {
      // destructure bandsData
      const { name, members, logo, logoCredits, bio, genre } = bandsData;
      console.log(name);
    }
  }

  return (
    <div key={index} className="times" onClick={() => displayBandDetails()}>
      <p className={isBreak ? "break" : "act"}>{act.act}</p>
      <p>
        {act.start} - {act.end === "24:00" ? "00:00" : act.end}
      </p>
    </div>
  );
}

export default Act;

/*
  name: string
  members: array
  logo: string
  logoCredits: string
  bio: string
  genre: string
*/
