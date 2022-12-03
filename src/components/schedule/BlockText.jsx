import React from "react";

function BlockText({ data, onDayChange, selectDay }) {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  //console.log(data);

  function filteredList() {
    for (const day in data) {
      if (day === selectDay) {
        return data[day].map((time, index) => {
          return (
            <div key={index} className="times">
              <p>{time.act}</p>
              <p>
                {time.start} - {time.end === "24:00" ? "00:00" : time.end}
              </p>
            </div>
          );
        });
      }
    }
  }

  return (
    <div id="stage-view-days">
      <div id="list-of-days">
        {days.map((day, index) => (
          <label key={index+1} className="button-days">
            {day.substring(0, 1).toUpperCase() + day.substring(1, day.length)}
            <input
              type="radio"
              name="days"
              id={day}
              onClick={() => onDayChange(day)}
              defaultChecked={day.substring(0, 3) === "mon"}
            />{" "}
          </label>
        ))}
      </div>
      <div className="weekdays">{filteredList()}</div>
    </div>
  );
}

export default BlockText;
