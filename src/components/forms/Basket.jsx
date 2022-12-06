import { useState } from "react";
import { info } from "sass";

function Basket({ ticket }) {
 const [campingPrice, setCampingPrice] = useState(false)
  
   if (ticket.campingArea === "none") {
      useState(false);
   } else {
      useState(true);
   }

  return (
    <section id="basket">
      <h3>YOUR ORDER</h3>
      <div className="basket-container">
        <ul>
          {Object.keys((ticket).map((info, index)) => {
            return(
              <li info={info}></li>
            )

          }
         
          {/*    <li>
            Regular x {ticket.r} , {ticket.r * 799},-
          </li>
          <li>
            VIP x {ticket.v} , {ticket.v * 1299},-
          </li>
          <li>
            Camping {ticket.campingArea} {campingPrice ? "" : "99,-"}
          </li> */}
        </ul>
        <p>Your total is...</p>
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