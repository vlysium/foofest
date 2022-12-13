function Job() {
  return (
    <section id="work">
      <div className="work-container">
        <div className="text-wrapper">
          <div className="work-text">
            <h1>WORK AT FOOFEST</h1>
            <p>
              Working at a festival is a great way to be part of the action and have a unique and exciting experience.
              There are a variety of different jobs available at festivals, from setting up the event grounds to working
              in the ticket booth or selling merchandise. You could also be a stage manager, helping to move equipment
              and manage the performers. There are also opportunities to work in food service, providing meals for
              festival goers, or to help out with security and crowd control. No matter what job you take on, working at
              a festival is sure to be a rewarding and unforgettable experience. If you are interested in a job at
              FooFest send your CV and application to{" "}
              <a href="#" onClick={(event) => event.preventDefault()}>
                jobs@foofest.com
              </a>
              .
            </p>
          </div>
        </div>
        <div className="section-image work-image"></div>
      </div>
    </section>
  );
}

export default Job;
