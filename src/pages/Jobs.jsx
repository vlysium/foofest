import "../styles/alternating-sections.scss";
import Job from "../components/jobs/Job";
import Voluenteer from "../components/jobs/Voluenteer";

function Jobs() {
  return (
    <section id="jobs">
      <Job />
      <Voluenteer />
    </section>
  );
}

export default Jobs;
