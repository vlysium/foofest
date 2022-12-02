import React from 'react'

function CreditCardInfo() {
  return (
    <>
      <h3>CREDITCARD INFO</h3>
      <fieldset id="creditcard-info">
        <label htmlFor="cardnumber" className='cardnumber'>
          Cardnumber
          <input type="text" name="cardnumber" id="cardnumber" pattern="[0-9]" inputMode="numeric" maxlength="16" minlength="16" />
        </label>

        <label htmlFor="expires" className='expires'>
          Expire <input type="month" name="expires" id="expires" pattern="[0-9]" inputMode="numeric" maxlength="4" minlength="4" required />
        </label>

        <label htmlFor="cvc" className='cvc'>
          CVC <input type="text" name="cvc" id="cvc" pattern="[0-9]" inputMode="numeric" maxlength="3" minlength="3" required />
        </label>

        <label htmlFor="cardholder" className='cardholder'>
          Cardholder fullname <input type="text" name="cardholder" id="cardholder" required autoComplete="name" />
        </label>
      </fieldset>
      <button>COMPLETE PAYMENT</button>
    </>
  );
}

export default CreditCardInfo