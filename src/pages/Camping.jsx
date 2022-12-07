import "../styles/camping.scss";
import GreenCamping from "../camping/GreenCamping";
import AboutCamping from "../camping/AboutCamping";
import CrewSetUp from "../camping/CrewSetUp";

function Camping() {
  const paragraph = (
    <p>
      Camping at FooFest is a great way to make the most of your experience. You can take advantage of the atmosphere, making friends and enjoying the festival atmosphere. There are a variety of different camping options available, so you can choose
      the one that best suits your needs and budget.
      <br />
      We have five different camping areas Svartheim, Nilfheim, Helheim, Muspelheim og Alfheim located around the festival square, so it allows you to be close to the action. In each camping area there are a variety of food options, small shops,
      toilets, showers and interactive activities. When you buy your festival ticket you can add camping for 99,- as well as other benefits to make your camping experience even better.
    </p>
  );

  return (
    <section id="about-camping">
      <AboutCamping text={paragraph} />
      <GreenCamping />
      <CrewSetUp />
    </section>
  );
}

export default Camping;
