import "../../styles/tickets-shop.scss";
import TicketCard from "./TicketCard";

function TicketsShop() {
  const card = {
    regular:
      "This ticket gives you access to the festival on the chosen day. With your ticket, you will be able to attend the main stage events, explore the food, drinks, and vendor village!",
    vip: "This exclusive VIP ticket gives you access to the most exclusive parts of the festival! Enjoy a day of luxury with unlimited food and drinks, exclusive artist meet and greets, and a private viewing area with the best view of the stage!",
    camping:
      "Our team will arrive at your designated camping area with a pre-pitched tent that has been set up in advance. All you need to do is show up and be ready to enjoy the festival!",
  };

  return (
    <section id="tickets-shop" className="max-width">
      <h2>FOOFEST TICKETS</h2>
      <div id="shop-wrapper">
        <ul id="shop-layout">
          <TicketCard
            title="VIP"
            text={card.vip}
            price="1299,-"
            buttonText="BUY NOW"
            link="tickets"
            className="ticket-card ticket-vip highlighted"
          />
          <TicketCard
            title="Regular"
            text={card.regular}
            price="799,-"
            buttonText="BUY NOW"
            link="tickets"
            className="ticket-card ticket-regular"
          />
          <TicketCard
            title="Camping"
            text={card.camping}
            price="99,-"
            buttonText="LEARN MORE"
            link="camping"
            className="ticket-card ticket-camping"
          />
        </ul>
      </div>
    </section>
  );
}

export default TicketsShop;
