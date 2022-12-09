import "../../styles/tickets-shop.scss";
import TicketCard from "./TicketCard";

function TicketsShop() {
  const card = {
    regular: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat minima cum inventore.",
    vip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat minima cum inventore.",
    camping: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat minima cum inventore.",
  };

  return (
    <section id="tickets-shop" className="max-width">
      <h2>Foofest Tickets</h2>
      <div id="shop-wrapper">
        <ul id="shop-layout">
          <TicketCard title="regular" text={card.regular} price="799,-" buttonText="Buy now" />
        </ul>
      </div>
    </section>
  );
}

export default TicketsShop;
