import { Link } from "react-router-dom";

function AboutCamping({ text, fromHomepage }) {
  return (
    <section id="camping">
      <div className="camping-container">
        <div className="text-wrapper">
          <div className="camping-text">
            <h1>FOOFEST CAMPING</h1>
            {text}
            {fromHomepage && (
              <Link to="/Camping">
                <button className="btn">Read More</button>
              </Link>
            )}
          </div>
        </div>
        <div className="camping-image"></div>
      </div>
    </section>
  );
}

export default AboutCamping;
