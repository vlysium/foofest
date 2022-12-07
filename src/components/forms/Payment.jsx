import Basket from "./Basket";
import CreditCardInfo from "./CreditCardInfo";
import OrderComplete from "./OrderComplete";

function Payment({ticket}) {
  return (
    <>
      <Basket ticket={ticket}/>
      <CreditCardInfo />
      <OrderComplete />
    </>
  );
}

export default Payment;
