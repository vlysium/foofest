import { useState } from "react";
import { DatePicker } from "antd";
// https://bobbyhadz.com/blog/react-check-if-email-is-valid

function TicketInfo({ type, finishedAdding }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [txt, setTxt] = useState("");

  // validate the email
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    //console.log(!isValidEmail(event.target.value));
    setMessage(event.target.value);
    finishedAdding();
  };

  function handleBlur(event) {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
  }

  // validate the name
  const onInputChange = (e) => {
    const { value } = e.target;
    //console.log('Input value: ', value);

    const re = /^[a-zæøåäöü\s]+$/gi;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
    finishedAdding();
  };
  const dateFormatList = "DD/MM/YYYY";

  return (
    <details className="ticketInfo" open>
      <summary>
        <span className="type">{type}</span> TICKET
      </summary>
      <fieldset className="ticket-info">
        <label className="label-fullname">
          Fullname{" "}
          <input
            type="text"
            name="fullname"
            className="fullname"
            autoComplete="name"
            onChange={onInputChange}
            value={txt}
          />
        </label>

        <label className="label-email">
          Email{" "}
          <input
            type="email"
            name="email"
            className="email"
            autoComplete="email"
            onChange={handleChange}
            value={message}
            onBlur={handleBlur}
          />
          <span>{error}</span>
        </label>

        <label className="label-birthday">
          Birthday{" "}
          <DatePicker
            onChange={finishedAdding}
            className="birthday"
            placeholder="Select date"
            //defaultValue={dayjs("01/01/2000", dateFormatList)}
            format={dateFormatList}
          />
        </label>
      </fieldset>
      {/*  <div className="button-container">
        <button>BACK</button>
        <button>NEXT</button>
      </div> */}
    </details>
  );
}

export default TicketInfo;
