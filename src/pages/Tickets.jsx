import TicketType from "../components/TicketType"
import "../styles/Tickets.scss";
import CampingArea from "../components/CampingArea";

function Tickets() {
  return (
    <>
      <section id="tickets">
        <TicketType />
        <CampingArea />
      </section>
    </>
  );
}

export default Tickets