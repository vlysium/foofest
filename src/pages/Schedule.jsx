import "../styles/Schedule.scss";
import ScheduleDates from "../components/ScheduleDates";
import { useState, useEffect } from "react";

function Schedule() {
  /*
    URL:
    "http://localhost:8080/schedule"
    "https://vjr-foofest.fly.dev/schedule"

        "http://localhost:8080/bands"
    "https://vjr-foofest.fly.dev/bands"
  */
  const scheduleUrl = "http://localhost:8080/schedule";
  const bandsUrl = "http://localhost:8080/bands";

  const [scheduleData, setScheduleData] = useState([]);
  const [bandsData, setBandsData] = useState([]);

  const [selectedStage, setSelectedStage] = useState("Midgard");

  // fetch /schedule endpoint
  useEffect(() => {
    async function getData() {
      const response = await fetch(scheduleUrl);
      const data = await response.json();
      setScheduleData(data);
      //console.log(data);
    }
    getData();
  }, [selectedStage]);

  // fetch /bands endpoint
  useEffect(() => {
    async function getData() {
      const response = await fetch(bandsUrl);
      const data = await response.json();
      setBandsData(data);
      //console.log(data);
    }
    getData();
  }, [selectedStage]);

  return (
    <section id="schedule">
      <div>
        <h2>FOOFEST 2023 PROGRAM</h2>
        <ScheduleDates scheduleData={scheduleData} bandsData={bandsData} stage="Midgard" />
      </div>
    </section>
  );
}

export default Schedule;

/*

*/
