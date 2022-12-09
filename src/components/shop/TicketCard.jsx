import { Link } from "react-router-dom";

function TicketCard({ title, text, price, buttonText }) {
  return (
    <li className="ticket-card">
      <h3 className="ticket-card-title">{title}</h3>
      <p className="ticket-card-text">{text}</p>
      <div>
        <Link to="/tickets">
          <button className="btn">{buttonText}</button>
        </Link>
        <p className="ticket-card-price">{price}</p>
      </div>
    </li>
  );
}

export default TicketCard;
