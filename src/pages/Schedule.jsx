import "../styles/Schedule.scss";
import PopUp from "../components/schedule/PopUp";
import ScheduleLayout from "../components/schedule/ScheduleLayout";
import { useState } from "react";

function Schedule() {
  const [popUpIsOpen, setPopUpIsOpen] = useState("");

  function onClosePopUp() {
    setPopUpIsOpen(false);
  }

  function onOpenPopUp() {
    setPopUpIsOpen(true);
  }

  return (
    <section id="schedule">
      <h2>FOOFEST 2023 PROGRAM</h2>
      <div id="schedule-grid">
        <ScheduleLayout />
      </div>
      <PopUp popUpIsOpen={popUpIsOpen} onClosePopUp={onClosePopUp} />
    </section>
  );
}

export default Schedule;
