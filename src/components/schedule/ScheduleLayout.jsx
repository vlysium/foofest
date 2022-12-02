import React from "react";
import BlockText from "./BlockText";
import { useState, useEffect } from "react";

function ScheduleLayout({ date, time, band, stage, genre, image }) {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    async function getData() {
      const response = await fetch(scheduleUrl);
      const data = await response.json();
      setData(data);
      //console.log(data);
    }
    getData();
  }, [selectStage]);

  function onDayChange(day) {
    setSelectDay(day.substring(0, 3));
  }

  let StageView = null;

  if (selectStage === "midgard") {
    StageView = <BlockText data={data.Midgard} onDayChange={onDayChange} selectDay={selectDay} />;
  } else if (selectStage === "jotunheim") {
    StageView = <BlockText data={data.Jotunheim} onDayChange={onDayChange} selectDay={selectDay} />;
  } else if (selectStage === "vanaheim") {
    StageView = <BlockText data={data.Vanaheim} onDayChange={onDayChange} selectDay={selectDay} />;
  }

  console.log(data);
  return (
    <>
      <button onClick={() => setSelectStage("midgard")}>Midgard</button>
      <button onClick={() => setSelectStage("jotunheim")}>Jotunheim</button>
      <button onClick={() => setSelectStage("vanaheim")}>Vanaheim</button>
      {StageView}
    </>
  );
}

export default ScheduleLayout;