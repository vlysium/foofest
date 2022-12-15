import React from "react";
import BlockText from "./BlockText";
import { useState } from "react";

function ScheduleLayout({ onOpenPopUp, bandsData, scheduleData }) {
  const [selectStage, setSelectStage] = useState("midgard");
  const [selectDay, setSelectDay] = useState("mon");

  function onDayChange(day) {
    setSelectDay(day.substring(0, 3));
  }

  function selectedStage() {
    switch (selectStage) {
      case "midgard":
        return scheduleData.Midgard;

      case "jotunheim":
        return scheduleData.Jotunheim;

      case "vanaheim":
        return scheduleData.Vanaheim;
    }
  }

  return (
    <div id="schedule-grid">
      <div id="list-of-stages">
        <label>
          MIDGARD
          <input type="radio" name="stage" onClick={() => setSelectStage("midgard")} defaultChecked />
        </label>
        <label>
          JOTUNHEIM
          <input type="radio" name="stage" onClick={() => setSelectStage("jotunheim")} />
        </label>
        <label>
          VANAHEIM
          <input type="radio" name="stage" onClick={() => setSelectStage("vanaheim")} />
        </label>
      </div>
      <BlockText
        scheduleData={selectedStage()}
        bandsData={bandsData}
        onDayChange={onDayChange}
        selectDay={selectDay}
        onOpenPopUp={onOpenPopUp}
      />
    </div>
  );
}

export default ScheduleLayout;
