import React from "react";
import BlockText from "./BlockText";
import data from "../../assets/schedule.json";
import { useState } from "react";

function ScheduleLayout({ date, time, band, stage, genre, image }) {
  const [selectStage, setSelectStage] = useState("midgard");
  const [selectDay, setSelectDay] = useState("mon");

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
