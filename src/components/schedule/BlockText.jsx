import React from 'react'

function BlockText({data}) {

    console.log(data)



  return (
    <div>
      <h4>Monday</h4>
      {Object.keys(data).map((day, index) => {
       console.log(data)
       console.log(day)
       console.log(data.day)
        
        return (
            <h4 key={index}>{day}</h4>
        
        );
        
      })}
    </div>
  );
}

export default BlockText



{/* <div className="times">
              <p>
                {item.start} - {item.end}
              </p>
              <p>{item.act}</p>
            </div>
            <hr /> */}