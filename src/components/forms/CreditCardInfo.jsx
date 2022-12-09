
function CreditCardInfo({ finishedAdding }) {
  return (
    <>
      <h3>CREDITCARD INFO</h3>
      <fieldset id="creditcard-info" className="creditcard-info">
        <label htmlFor="cardnumber" className="cardnumber">
          Cardnumber
          <input
            type="text"
            name="cardnumber"
            className="card-number"
            id="cardnumber"
            pattern="[0-9]"
            inputMode="numeric"
            maxLength="16"
            minLength="16"
            required
            onChange={finishedAdding}
          />
        </label>

        <label htmlFor="expires" className="expires">
          Expire
          <div className="expire-container">
            <input
              type="text"
              name="expires"
              className="expire-day"
              id="expire-day"
              pattern="[0-9]"
              inputMode="numeric"
              maxLength="2"
              minLength="2"
              required
              onChange={finishedAdding}
            />{" "}
            /
            <input
              type="text"
              name="expires"
              className="expire-month"
              id="expire-month"
              pattern="[0-9]"
              inputMode="numeric"
              maxLength="2"
              minLength="2"
              required
              onChange={finishedAdding}
            />
          </div>
        </label>

        <label htmlFor="cvc" className="cvc">
          CVC{" "}
          <input
            type="text"
            name="cvc"
            className="cvc-number"
            id="cvc"
            pattern="[0-9]"
            inputMode="numeric"
            maxLength="3"
            minLength="3"
            required
            onChange={finishedAdding}
          />
        </label>

        <label htmlFor="cardholder" className="cardholder">
          Cardholder fullname{" "}
          <input
            type="text"
            name="cardholder"
            className="card-holder"
            id="cardholder"
            required
            autoComplete="name"
            onChange={finishedAdding}
          />
        </label>
      </fieldset>
      {/*  <button>COMPLETE PAYMENT</button> */}
    </>
  );
}

export default CreditCardInfo