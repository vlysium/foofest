import React from "react";

function QuickAbout({text}) {
  return (
    <section id="second">
      <div className="about-container">
        <div className="aboutText">
          <h2>About Us</h2>
           {text}
          <a href="/about">
            <button>Read More</button>
          </a>
        </div>
        <div className="aboutImage"></div>
      </div>
    </section>
  );
}

export default QuickAbout;
