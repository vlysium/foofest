import Basket from "./Basket";
import CreditCardInfo from "./CreditCardInfo";
import OrderComplete from "../components/OrderComplete";

function Payment() {
  return (
    <>
      <Basket />
      <CreditCardInfo />
      <OrderComplete />
    </>
  );
}

export default Payment;
