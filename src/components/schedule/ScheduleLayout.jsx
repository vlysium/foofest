import React from "react";
import BlockText from "./BlockText";
import { useState, useEffect } from "react";

function ScheduleLayout({ date, time, band, stage, genre, image }) {
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
  }, [selectStage, selectDay]);

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

  if (selectStage === "midgard") {
    StageView = (
      <BlockText
        scheduleData={scheduleData.Midgard}
        bandsData={bandsData}
        onDayChange={onDayChange}
        selectDay={selectDay}
      />
    );
  } else if (selectStage === "jotunheim") {
    StageView = (
      <BlockText
        scheduleData={scheduleData.Jotunheim}
        bandsData={bandsData}
        onDayChange={onDayChange}
        selectDay={selectDay}
      />
    );
  } else if (selectStage === "vanaheim") {
    StageView = (
      <BlockText
        scheduleData={scheduleData.Vanaheim}
        bandsData={bandsData}
        onDayChange={onDayChange}
        selectDay={selectDay}
      />
    );
  }

  //console.log(scheduleData);
  return (
    <>
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
      {StageView}
    </>
  );
}

export default ScheduleLayout;
