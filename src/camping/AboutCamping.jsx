function AboutCamping({ text, button }) {
  return (
    <>
      <section id="about-camping">
        <div className="about-container">
          <div className="aboutText">
            <h1>FOOFEST CAMPING</h1>
            {text}
            {button}
          </div>
          <div className="aboutImage aboutImage1"></div>
        </div>
      </section>
    </>
  );
}

export default AboutCamping;
