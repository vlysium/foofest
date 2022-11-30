import "../styles/Schedule.scss"
import {useState} from "react"
function ScheduleDates({image}) {
    const [isImage, setIsImage] = useState(false)
    
function ImageURL() {
    if (image === undefined) {
      console.log("image is null");
      return (
          <hr />
      );
    } else {
      console.log(image);
      return (
          <img src={image} alt="" />
      );
    }

}


  return (
    <div className="schedule-info-grid">
      <p>13:30</p>
      <div>
        <span>Band</span>
        <p>A Perfect Cirle</p>
      </div>
      <div>
        <span>Stage</span>
        <p>Midgard</p>
      </div>
      <div>
        <span>Genre</span>
        <p>Alternative Rock</p>
      </div>
        <ImageURL/>
    </div>
  );
}

export default ScheduleDates