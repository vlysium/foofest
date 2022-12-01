function ScheduleDates({ scheduleData, bandsData, stage }) {
  return (
    <div className="schedule-info-grid">
      <p>10</p>
      <div>
        <span className="label">Band</span>
        <p className="band">{scheduleData.Midgard ? scheduleData.Midgard.mon[0].act : null}</p>
      </div>
      <div>
        <span className="label">Stage</span>
        <p className="stage">{stage}</p>
      </div>
      <div>
        <span className="label">Genre</span>
        <p className="genre">Alternative Rock</p>
      </div>
    </div>
  );
}

export default ScheduleDates;
