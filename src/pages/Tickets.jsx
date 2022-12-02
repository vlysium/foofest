import TicketType from "../components/TicketType"
import "../styles/Tickets.scss";
import CampingArea from "../components/CampingArea";
import Optionals from "../components/Optionals";
import TicketInfo from "../components/TicketInfo";
import Payment from "../components/Payment";


function Tickets() {
  return (
  
    <section>
      <form action="" id="tickets">
        <TicketType />
        <CampingArea />
        <Optionals/>
        <TicketInfo/>
        <Payment/>
      </form>
      
    </section>
  );
}

export default Tickets