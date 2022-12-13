import { useState } from "react";
function CreditCardInfo({ finishedAdding, emptyField, ticket }) {
  const [txt, setTxt] = useState("");
  const [creidtNr, setCreidtNr] = useState("");
  const [creidtNrSpan, setCreidtNrSpan] = useState(false);
  const [month, setMonth] = useState("");
  const [monthSpan, setMonthSpan] = useState("");
  const [year, setYear] = useState("");
  const [yearSpan, setYearSpan] = useState("");
  const [cvc, setCvc] = useState("");
  const [cvcSpan, setCvcSpan] = useState("");
  const [focusing, setFocusing] = useState(false);

  // changes focus
  const input = document.querySelectorAll("input");
  input.forEach((e, i) => {
    e.addEventListener("input", () => {
      if (e.value.length === e.maxLength) {
        input[i + 1].focus();
      }
    });
  });

  // set field values
  const onInputChange = (e) => {
    const { value } = e.target;

    if (e.target.id === "cardholder") {
      const re = /^[a-zæøåäöü\s]+$/gi;
      if (value === "" || re.test(value)) {
        setTxt(value);
      }
    } else if (e.target.id === "cardnumber") {
      const re = /^[\d]+$/g;
      if (value === "" || re.test(value)) {
        setCreidtNr(value);
      }
    } else if (e.target.id === "expire-day") {
      const re = /^[\d]+$/g;
      if (value === "" || re.test(value)) {
        setMonth(value);
      }
    } else if (e.target.id === "expire-month") {
      const re = /^[\d]+$/g;
      if (value === "" || re.test(value)) {
        setYear(value);
      }
    } else if (e.target.id === "cvc") {
      const re = /^[\d]+$/g;
      if (value === "" || re.test(value)) {
        setCvc(value);
      }
    }

    finishedAdding();
  };

  // validate name & field length
  function handleBlur(e) {
    if (e.target.id === "cardnumber") {
      if (e.target.value.length < 16) {
        setCreidtNrSpan(true);
      } else {
        setCreidtNrSpan(false);
      }
    } else if (e.target.id === "expire-day") {
      setFocusing(false);
      if (e.target.value.length < 2) {
        setMonthSpan(true);
      } else {
        setMonthSpan(false);
      }
    } else if (e.target.id === "expire-month") {
      setFocusing(false);
      if (e.target.value.length < 2) {
        setYearSpan(true);
      } else {
        setYearSpan(false);
      }
    } else if (e.target.id === "cvc") {
      if (e.target.value.length < 3) {
        setCvcSpan(true);
      } else {
        setCvcSpan(false);
      }
    }

    finishedAdding();
  }

  return (
    <>
      <h3 className="credit-headline">CREDITCARD INFO</h3>
      <fieldset id="creditcard-info" className="creditcard-info">
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
            onBlur={handleBlur}
            value={txt}
          />
          {emptyField ? <span className="field-required">Field Required</span> : null}
        </label>
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
            onChange={onInputChange}
            onBlur={handleBlur}
            value={creidtNr}
          />
          {creidtNrSpan ? <span className="field-required">Field Required</span> : null}
        </label>

        <label htmlFor="expires" className="expires">
          Expire
          <div className={focusing ? "expire-container focus-visible" : "expire-container"}>
            <input
              type="text"
              name="expires"
              className="expire-day"
              id="expire-day"
              pattern="[0-9]"
              inputMode="numeric"
              maxLength="2"
              minLength="2"
              placeholder="dd"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
              required
              onChange={onInputChange}
              onBlur={handleBlur}
              value={month}
              onFocus={() => setFocusing(true)}
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
              placeholder="mm"
              required
              onChange={onInputChange}
              onBlur={handleBlur}
              value={year}
              onFocus={() => setFocusing(true)}
            />
          </div>
          {monthSpan || yearSpan ? <span className="field-required">Field Required</span> : null}
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
            onChange={onInputChange}
            onBlur={handleBlur}
            value={cvc}
          />
          {cvcSpan ? <span className="field-required">Field Required</span> : null}
        </label>
      </fieldset>
      {/*  <button>COMPLETE PAYMENT</button> */}
    </>
  );
}

export default CreditCardInfo;
