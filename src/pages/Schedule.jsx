import "../styles/Schedule.scss";

import ScheduleLayout from "../components/schedule/ScheduleLayout";

function Schedule() {
  return (
    <>
      <section id="schedule">
        <h2>FOOFEST 2023 PROGRAM</h2>
        <div id="schedule-grid">
          <ScheduleLayout />
        </div>
      </section>
    </>
  );
}

export default Schedule;
