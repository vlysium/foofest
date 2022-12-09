import { Link } from "react-router-dom";

function QuickAbout({ text }) {
  return (
    <section id="about">
      <div className="about-container">
        <div className="text-wrapper">
          <div className="about-text">
            <h2>About Us</h2>
            {text}
            <Link href="/about">
              <button className="btn">Read More</button>
            </Link>
          </div>
        </div>
        <div className="about-image"></div>
      </div>
    </section>
  );
}

export default QuickAbout;
