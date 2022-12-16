import { useState, useEffect } from "react";

function Basket({ ticket }) {
  const [regular, setRegular] = useState(false);
  const [vip, setVip] = useState(false);
  const [campingPrice, setCampingPrice] = useState(false);
  const [green, setGreen] = useState(false);
  const [tents, setTents] = useState(false);
  let total = 99;
  if (ticket.r > 0) {
    total += ticket.r * 799;
  }
  if (ticket.v > 0) {
    total += ticket.v * 1299;
  }
  if (ticket.campingArea != "") {
    total += 99;
  }
  if (ticket.greenCamping != undefined) {
    total += ticket.greenCamping;
  }
  if (ticket.tentAmount != undefined) {
    total += ticket.tentAmount;
  }

  useEffect(() => {
    if (ticket.r <= 0) {
      setRegular(false);
    } else {
      setRegular(true);
    }
    if (ticket.v <= 0) {
      setVip(false);
    } else {
      setVip(true);
    }
    if (ticket.tentAmount === 0 || ticket.tentAmount === undefined) {
      setTents(false);
    } else {
      setTents(true);
    }
    if (ticket.greenCamping === 0 || ticket.greenCamping === undefined) {
      setGreen(false);
    } else {
      setGreen(true);
    }
    if (ticket.campingArea === "" || ticket.campingArea === undefined) {
      setCampingPrice(false);
    } else {
      setCampingPrice(true);
    }
  }, [ticket]);

  return (
    <section id="basket">
      <h3>YOUR ORDER</h3>
      <div className="basket-container">
        <ul>
          <li>
            Booking fee <span>99,-</span>{" "}
          </li>
          {regular ? (
            <li>
              Regular Ticket x {ticket.r}
              <span>{ticket.r * 799},-</span>
            </li>
          ) : null}

          {vip ? (
            <li>
              VIP Ticket x {ticket.v}
              <span>{ticket.v * 1299},-</span>
            </li>
          ) : null}

          {campingPrice ? (
            <li>
              Camping {ticket.campingArea}
              <span>99,-</span>
            </li>
          ) : null}

          {green ? (
            <li>
              Green Camping
              <span>{ticket.greenCamping},-</span>
            </li>
          ) : null}

          {tents ? (
            <li>
              Camp Set-up
              <span>{ticket.tentAmount},-</span>
            </li>
          ) : null}
        </ul>
        <p>
          <span>
            <b> Total </b>
          </span>
          <span>
            <b> {total} DKK</b>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Basket;

/*

     {props.cart.map((item) => (
          <li key={item.id}>
            {item.productdisplayname} x {item.amount}, {item.amount * item.price},-
            <button onClick={() => props.removeFromCart(item.id)}>X</button>
          </li>
        ))}

*/
