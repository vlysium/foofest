import "../styles/Schedule.scss";
import ScheduleDates from "../components/ScheduleDates";
function Schedule() {
  /* <ScheduleDates />
      <ScheduleDates />
      <ScheduleDates />
      <ScheduleDates image={"https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3334&q=80"}/>
 */

  return (
    <section>
        <div>
      <h2>FOOFEST 2023 PROGRAM</h2>
      <div className="schedule-webGrid">
        <div className="container">
          <div className="container-left">
        <h4>Monday 10th</h4>
            <ScheduleDates />
            <ScheduleDates />
            <ScheduleDates />
          </div>
          <div className="container-right">
            <ScheduleDates
              image={
                "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3334&q=80"
              }
            />
          </div>
        </div>
        <div className="container">
          <div className="container-left">
        <h4>Monday 10th</h4>
            <ScheduleDates />
            <ScheduleDates />
            <ScheduleDates />
          </div>
          <div className="container-right">
            <ScheduleDates
              image={
                "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3334&q=80"
              }
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Schedule;
