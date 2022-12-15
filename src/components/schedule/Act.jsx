function Act({ act, index, filteredBandsData, isBreak, onOpenPopUp }) {
  function displayBandDetails() {
    // if it is not a break
    if (!isBreak) {
      //console.log(filteredBandsData);
      onOpenPopUp(filteredBandsData);
    }
  }

  return (
    <li key={index} className="times" onClick={() => displayBandDetails()}>
      <p className={isBreak ? "break" : "act"}>{act.act}</p>
      <p className="time-playing">
        {act.start} - {act.end === "24:00" ? "00:00" : act.end}
      </p>
    </li>
  );
}

export default Act;
