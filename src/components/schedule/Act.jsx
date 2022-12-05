function Act({ act, index, bandsData, scheduleData, isBreak }) {
  function displayBandDetails() {
    // if it is not a break
    if (!isBreak) {
      // filter /bands by name of the act from /schedule
      const band = bandsData.filter((item) => item.name === act.act)[0];
      console.log(band);
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
