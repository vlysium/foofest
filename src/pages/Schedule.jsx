import "../styles/Schedule.scss";
import PopUp from "../components/schedule/PopUp";
import ScheduleLayout from "../components/schedule/ScheduleLayout";
import { useState } from "react";

function Schedule() {
  const [popUpIsOpen, setPopUpIsOpen] = useState("");
  const [displayData, setDisplayData] = useState({});

  function handleClosePopUp() {
    // close the pop-up if the user clicks outside the actual pop-up or the close button
    if (event.target.id === "pop-up" || event.target.id === "close-pop-up") {
      setPopUpIsOpen(false);
    }
  }

  function handleOpenPopUp(data) {
    setPopUpIsOpen(true);
    setDisplayData(data);
    //console.log(data);
  }

  return (
    <section id="schedule">
      <h2>FOOFEST 2023 PROGRAM</h2>
      <ScheduleLayout onOpenPopUp={handleOpenPopUp} />
      <PopUp popUpIsOpen={popUpIsOpen} onClosePopUp={handleClosePopUp} data={displayData} />
    </section>
  );
}

export default Schedule;
