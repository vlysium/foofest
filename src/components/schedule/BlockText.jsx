import React from "react";

function BlockText({ data }) {
  console.log(data);

  return (
    <div className="StageViewDays">

      {Object.keys(data).map((day, index) => {
        // Get the correct name of the week
        let rightDay = "";
        switch (day) {
          case "mon":
            rightDay = "Monday";
            break;
          case "tue":
            rightDay = "Tuesday";
            break;
          case "wed":
            rightDay = "Wednesday";
            break;
          case "thu":
            rightDay = "Thursday";
            break;
          case "fri":
            rightDay = "Friday";
            break;
          case "sat":
            rightDay = "Saturday";
            break;
          case "sun":
            rightDay = "Sunday";
            break;
        }

        return (
          <>
          <div className="weekdays">
            <h4 key={index}>{rightDay}</h4>

            {data[day].map((time) => (
                // Make an if state to stop the creation of a <hr/> on the last element. there are 12 times in a day
              <>
                <div className="times">
                  <p>{time.act}</p>
                  <p>
                    {time.start} - {time.start}
                  </p>
                </div>
                <hr />
              </>
            ))}</div>
          </>
        );
      })}
    </div>
  );
}

export default BlockText;

{
  /* <div className="times">
              <p>
                {item.start} - {item.end}
              </p>
              <p>{item.act}</p>
            </div>
            <hr /> */
}
