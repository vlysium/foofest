import { useState, useEffect } from "react";


function Basket({ ticket }) {
 const [regular, setRegular] = useState(false)
 const [vip, setVip] = useState(false)
 const [campingPrice, setCampingPrice] = useState(false)
 const [green, setGreen] = useState(false)
 const [tents, setTents] = useState(false)
 let total = 0
  if(ticket.r >0){
    total += ticket.r * 799;
  }
  if(ticket.v >0){
    total += ticket.v * 1299;
  }
  if (ticket.campingArea != "none") {
    total += 99
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
   if (ticket.tentAmount === "none" || ticket.tentAmount === undefined) {
     setTents(false);
   } else {
     setTents(true);
   }
   if (ticket.greenCamping === "none" || ticket.greenCamping === undefined) {
     setGreen(false);
   } else {
     setGreen(true);
   }
   if (ticket.campingArea === "none" ||ticket.campingArea === undefined) {
      setCampingPrice(false);
   } else {
      setCampingPrice(true);
   }

  },[ticket]);

  return (
    <section id="basket">
      <h3>YOUR ORDER</h3>
      <div className="basket-container">
        <ul>
          <li>{regular ? `Regular Ticket x ${ticket.r} , ${ticket.r * 799},-` : ""}</li>
          <li>{vip ? `VIP Ticket x ${ticket.v} , ${ticket.v * 1299},-` : ""}</li>
          <li>{campingPrice ? `Camping ${ticket.campingArea} 99,-` : ""}</li>
          <li>{green ? `Green Camping: ${ticket.greenCamping},-` : ""}</li>
          <li>{tents ? `Camp Set-up: ${ticket.tentAmount},-` : ""}</li>
        </ul>
        <p>
          <span>
            <b> Total </b>
          </span>
          <span>
            <b> {total} DKK </b>
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