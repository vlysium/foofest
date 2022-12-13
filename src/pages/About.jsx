import "../styles/alternating-sections.scss";
import QuickAbout from "../components/about/QuickAbout";
import Sustainabilty from "../components/about/Sustainabilty";

function About() {
  const paragraph = (
    <p>
      {" "}
      Welcome to FooFest! <br />
      <br /> We are an annual music festival that celebrates the best in music and entertainment. Our mission is to
      create a fun, safe, and memorable experience for everyone.
      <br />
      <br /> FooFest brings some of the best musicians and artists to the stage. Our lineup is eclectic and diverse,
      with something for everyone. We feature both national and international acts, as well as smaller, up and coming
      acts.
      <br />
      <br /> We strive to provide a safe, welcoming environment for everyone. Our security team works hard to ensure
      that everyone is safe and respected, and has a great time. We also work to create a sustainable and
      environmentally-friendly festival, aiming to reduce our carbon footprint and recycle as much as possible.
      <br />
      <br /> Aside from the music, FooFest also has plenty of other attractions. From food and drinks to interactive
      activities, there's something for everyone.
      <br />
      <br /> Come join us at FooFest for an unforgettable experience!
    </p>
  );

  return (
    <>
      <QuickAbout text={paragraph} />
      <Sustainabilty />
    </>
  );
}

export default About;
