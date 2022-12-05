import Act from "./Act";

function BlockText({ scheduleData, bandsData, onDayChange, selectDay }) {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  //console.log(scheduleData);

  function bandDetails(act) {
    // if it is not a break
    if (act.act !== "break") {
      // filter /bands by name of the act from /schedule
      const band = bandsData.filter((item) => item.name === act.act)[0];
      return band;
    }
  }

  function filteredList() {
    // filter list by day
    for (const day in scheduleData) {
      if (day === selectDay) {
        return scheduleData[day].map((act, index) => {
          // break or act?
          if (act.act == "break") {
            return <Act act={act} isBreak={true} key={index} bandsData={bandDetails(act)}></Act>;
          } else {
            return <Act act={act} isBreak={false} key={index} bandsData={bandDetails(act)}></Act>;
          }
        });
      }
    }
  }

  return (
    <div id="stage-view-days">
      <div id="list-of-days">
        {days.map((day, index) => (
          <label key={index + 1} className="button-days">
            {day.substring(0, 1).toUpperCase() + day.substring(1, day.length)}
            <input
              type="radio"
              name="days"
              id={day}
              onClick={() => onDayChange(day)}
              defaultChecked={day.substring(0, 3) === "mon"}
            />{" "}
          </label>
        ))}
      </div>
      <div className="weekdays">{filteredList()}</div>
    </div>
  );
}

export default BlockText;
