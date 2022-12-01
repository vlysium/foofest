import { scheduleLogic } from "../modules/schedule.js";

function Act({ scheduleData, bandsData, stage }) {
  return (
    <div className="schedule-info-grid">
      <p>{scheduleLogic(scheduleData, bandsData, "period")}</p>
      <div>
        <span className="label">Band</span>
        <p className="band">{scheduleLogic(scheduleData, bandsData, "bandname")}</p>
      </div>
      <div>
        <span className="label">Stage</span>
        <p className="stage">{stage}</p>
      </div>
      <div>
        <span className="label">Genre</span>
        <p className="genre">{scheduleLogic(scheduleData, bandsData, "genre")}</p>
      </div>
    </div>
  );
}

export default Act;
