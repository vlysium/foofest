import React from "react";
import BlockText from "./BlockText";
import data from "../../assets/schedule.json";
import { useState } from "react";

function ScheduleLayout({ date, time, band, stage, genre, image }) {
  const [selectStage, setSelectStage] = useState("midgard");

let StageView = <></>

if (selectStage === "midgard") {
  StageView = <BlockText data={data.Midgard} />;
} else if (selectStage === "jotunheim") {
  StageView = <BlockText data={data.Jotunheim} />;
} else if (selectStage === "vanaheim") {
  StageView = <BlockText data={data.Vanaheim} />;
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
