import React from "react";

function BlockText({ data, onDayChange, selectDay }) {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  //console.log(data);

  function filteredList() {
    for (const day in data) {
      if (day === selectDay) {
        return data[day].map((time) => {
          return (
            <div className="times">
              <p>{time.act}</p>
              <p>
                {time.start} - {time.end}
              </p>
            </div>
          );
        });
      }
    }
  }

  return (
    <div className="StageViewDays">
      <div className="listOfDays">
        {days.map((day) => (
          <button id={day} onClick={() => onDayChange(day)}>
            {day.substring(0, 1).toUpperCase() + day.substring(1, day.length)}
          </button>
        ))}
      </div>
      <div className={`weekdays`}>{filteredList()}</div>;
    </div>
  );
}

export default BlockText;
