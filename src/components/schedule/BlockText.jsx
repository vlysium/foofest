import React from "react";

function BlockText({ data }) {
  let count = 0;
  const days = ["Monday", "Tuesday", "Wedensday", "Thursday", "Friday","Saturday","Sunday"]
  console.log(data);

  function hideAndDisplay(id){
    console.log(id)
    
    //document.querySelector(".weekday1").classList.add("showDay")


  }

  return (
    <div className="StageViewDays">
      <div className="listOfDays">
        {days.map((day) => (
          <>
            <button id={day} onClick={() => hideAndDisplay(event.target.id)}>
              {day}
            </button>
          </>
        ))}
      </div>

      {Object.keys(data).map((day, index) => {
        // Get the correct name of the week
        count++;
        let timeCounter = 0;
        return (
          <>
            <div className={`weekday${count} weekdays`}>

              {data[day].map((time) => {
                if (timeCounter < 11) {
                  timeCounter++;

                  return (
                    <>
                      <div className="times">
                        <p>{time.act}</p>
                        <p>
                          {time.start} - {time.start}
                        </p>
                      </div>
                      <hr />
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className="times">
                        <p>{time.act}</p>
                        <p>
                          {time.start} - {time.start}
                        </p>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default BlockText;