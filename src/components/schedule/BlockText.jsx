import React from "react";

function BlockText({ data }) {
  let count = 0;
  const days = ["Monday", "Tuesday", "Wedensday", "Thursday", "Friday","Saturday","Sunday"]
  console.log(data);
  
  function hideAndDisplay(id){
    console.log(id)
    //document.querySelector(".weekday1").classList.add("showDay")
    document.querySelectorAll(".weekdays").forEach((e,i) =>{
      if(id == days[0] && i == 0) {
        e.classList.add("showDay") 
      } else if(id == days[1] && i == 1){
        e.classList.add("showDay"); 
      } else if(id == days[2] && i == 2){
        e.classList.add("showDay"); 
      } else if(id == days[3] && i == 3){
        e.classList.add("showDay"); 
      } else if(id == days[4] && i == 4){
        e.classList.add("showDay"); 
      } else if(id == days[5] && i == 5){
        e.classList.add("showDay"); 
      }else if(id == days[6] && i == 6){
        e.classList.add("showDay"); 
      } else{
        e.classList.remove("showDay")
        e.classList.add("weekdays")
      }
    })

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
                          {time.start} - {time.end}
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
                          {time.start} - {time.end}
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