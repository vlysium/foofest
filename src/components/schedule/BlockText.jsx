import Act from "./Act";

function BlockText({ scheduleData, bandsData, selectDay, onOpenPopUp }) {
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
          return (
            <Act
              act={act}
              isBreak={act.act === "break" ? true : false}
              key={index}
              bandsData={bandDetails(act)}
              onOpenPopUp={onOpenPopUp}
            ></Act>
          );
        });
      }
    }
  }

  return (
    <div id="stage-view-days">
      <ul className="weekdays">{filteredList()}</ul>
    </div>
  );
}

export default BlockText;
