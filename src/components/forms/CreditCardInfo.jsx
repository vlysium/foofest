import { useState } from "react";
function CreditCardInfo({ finishedAdding, emptyField, ticket }) {
  const [txt, setTxt] = useState("");
// changes focus
  const input = document.querySelectorAll("input");
  input.forEach((e, i) => {
    e.addEventListener("input", () => {
      if (e.value.length === e.maxLength) {
        input[i + 1].focus();
      }
    });
  });
// validate name
  const onInputChange = (e) => {
    const { value } = e.target;
    console.log("Input value: ", value);

    const re = /^[A-ø a-ø]+$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
    finishedAdding();
  };



  return (
    <>
      <h3>CREDITCARD INFO</h3>
      <fieldset id="creditcard-info" className="creditcard-info">
        <label htmlFor="cardnumber" className="cardnumber">
          Cardnumber
          <input
            type="text"
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
            }}
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
          {emptyField ? (
            <span style={{ color: "red" }}>Field Required</span>
          ) : (
            ""
          )}
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
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
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
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
              maxLength="2"
              minLength="2"
              required
              onChange={finishedAdding}
            />
          </div>
          {emptyField ? (
            <span style={{ color: "red" }}>Field Required</span>
          ) : (
            ""
          )}
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
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
            }}
            minLength="3"
            required
            onChange={finishedAdding}
          />
          {emptyField ? (
            <span style={{ color: "red" }}>Field Required</span>
          ) : (
            ""
          )}
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
            onChange={onInputChange}
            value={txt}
          />
          {emptyField ? (
            <span style={{ color: "red" }}>Field Required</span>
          ) : (
            ""
          )}
        </label>
      </fieldset>
      {/*  <button>COMPLETE PAYMENT</button> */}
    </>
  );
}

export default CreditCardInfo