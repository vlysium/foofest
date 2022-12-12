import { Link } from "react-router-dom";

function TicketCard({ title, text, price, buttonText, link, className }) {
  return (
    <li className={className}>
      <div>
        <h3 className="ticket-card-title">{title}</h3>
        <p className="ticket-card-text">{text}</p>
        <div>
          <Link to={"/" + link}>
            <button className="btn">{buttonText}</button>
          </Link>
          <p className="ticket-card-price">{price}</p>
        </div>
      </div>
    </li>
  );
}

export default TicketCard;
