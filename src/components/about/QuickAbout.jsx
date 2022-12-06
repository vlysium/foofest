import React from "react";

function QuickAbout({text, button}) {
  return (
    <section id="second">
      <div className="about-container">
        <div className="aboutText">
          <h2>About Us</h2>
           {text}
          {button}
        </div>
        <div className="aboutImage aboutImage1"></div>
      </div>
    </section>
  );
}

export default QuickAbout;
