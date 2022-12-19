import React from "react";
import ListOfActs from "./ListOfActs";
import { useState } from "react";

function ScheduleLayout({ onOpenPopUp, bandsData, scheduleData }) {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  //console.log(scheduleData);

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
      <h4 className="stages-label">Stages</h4>
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

      <div id="list-of-days">
        {days.map((day) => (
          <label className="button-days">
            {day.substring(0, 1).toUpperCase() + day.substring(1, day.length)}
            <input
              type="radio"
              name="days"
              id={day}
              onClick={() => onDayChange(day)}
              defaultChecked={day.substring(0, 3) === "mon"}
            />
          </label>
        ))}
      </div>

      <ListOfActs
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
