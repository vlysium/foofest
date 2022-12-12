import "../../styles/tickets-shop.scss";
import TicketCard from "./TicketCard";

function TicketsShop() {
  const card = {
    regular: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat minima inventore.",
    vip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat minima inventore.",
    camping: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat minima inventore.",
  };

  return (
    <section id="tickets-shop" className="max-width">
      <h2>Foofest Tickets</h2>
      <div id="shop-wrapper">
        <ul id="shop-layout">
          <TicketCard
            title="VIP"
            text={card.vip}
            price="1299,-"
            buttonText="Buy now"
            link="tickets"
            className="ticket-card ticket-vip highlighted"
          />
          <TicketCard
            title="Regular"
            text={card.regular}
            price="799,-"
            buttonText="Buy now"
            link="tickets"
            className="ticket-card ticket-regular"
          />
          <TicketCard
            title="Camping"
            text={card.camping}
            price="99,-"
            buttonText="Learn more"
            link="camping"
            className="ticket-card ticket-camping"
          />
        </ul>
      </div>
    </section>
  );
}

export default TicketsShop;
