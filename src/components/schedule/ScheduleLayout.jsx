import React from "react";
import BlockText from "./BlockText";
import data from "../../assets/schedule.json";

function ScheduleLayout({ date, time, band, stage, genre, image }) {
  console.log(data);
  return (
    <>
      <BlockText data={data.Midgard} />;

    </>
  );
}

export default ScheduleLayout;
