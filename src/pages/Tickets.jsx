import TicketType from "../components/TicketType"
import "../styles/Tickets.scss";
import CampingArea from "../components/CampingArea";

function Tickets() {
  return (
    <>
      <form action="" id="tickets">
        <TicketType />
        <CampingArea />
      </form>
    </>
  );
}

export default Tickets