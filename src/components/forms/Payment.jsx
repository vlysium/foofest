import Basket from "./Basket";
import CreditCardInfo from "./CreditCardInfo";
import OrderComplete from "./OrderComplete";
import { useRef } from "react";

function Payment({ticket, addToTicket}) {

   const sectionEl = useRef(null);

   function finishedAdding() {
     event.preventDefault();

     console.log(sectionEl.current);
     const creditCard = [];
     // 1. find alle .ticketInfo.queryselectorALL()
     const formsElements =
       sectionEl.current.querySelectorAll(".creditcard-info");
     console.log(formsElements);

     // 2. find alle formfelter og lave et object af hver formfield (object fullname: "", email:"", birthday: "")

     formsElements.forEach((e) => {
       const form = {
         number: Number(e.querySelector(".card-number").value),
         day: Number(e.querySelector(".expire-day").value),
         month: Number(e.querySelector(".expire-month").value),
         cvc: Number(e.querySelector(".cvc-number").value),
         cardholder: e.querySelector(".card-holder").value,
       };
        creditCard.push(form)
     });
     // 3. addToTicket("info", "voresNyeArray" )
     addToTicket("payment", creditCard);
   }

  return (
    <>
      <Basket ticket={ticket} />
      <section ref={sectionEl}>
        <CreditCardInfo finishedAdding={finishedAdding} />
      </section>
      <OrderComplete />
    </>
  );
}

export default Payment;
