import React from "react";
import BlockText from "./BlockText";
import { useState, useEffect } from "react";

function ScheduleLayout({ onOpenPopUp }) {
  const [scheduleData, setScheduleData] = useState([]);
  const [bandsData, setBandsData] = useState([]);
  const [selectStage, setSelectStage] = useState("midgard");
  const [selectDay, setSelectDay] = useState("mon");

  /*
    URL:
    "http://localhost:8080/schedule"
    "https://vjr-foofest.fly.dev/schedule"
    "http://localhost:8080/bands"
    "https://vjr-foofest.fly.dev/bands"
  */
  const scheduleUrl = "http://localhost:8080/schedule";
  const bandsUrl = "http://localhost:8080/bands";

  useEffect(() => {
    async function getScheduleData() {
      const response = await fetch(scheduleUrl);
      const data = await response.json();
      setScheduleData(data);
      //console.log(data);
    }
    getScheduleData();
  }, []);

  useEffect(() => {
    async function getBandsData() {
      const response = await fetch(bandsUrl);
      const data = await response.json();
      setBandsData(data);
      //console.log(data);
    }
    getBandsData();
  }, []);

  function onDayChange(day) {
    setSelectDay(day.substring(0, 3));
  }

  let StageView = null;

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

  //console.log(scheduleData);
  return (
    <div id="schedule-grid">
      <div id="list-of-stages">
        <label>
          Midgard
          <input type="radio" name="stage" onClick={() => setSelectStage("midgard")} defaultChecked />
        </label>
        <label>
          Jotunheim
          <input type="radio" name="stage" onClick={() => setSelectStage("jotunheim")} />
        </label>
        <label>
          Vanaheim
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
