import { useState } from "react";
// https://bobbyhadz.com/blog/react-check-if-email-is-valid 


function TicketInfo({ type, finishedAdding }) {

  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);


  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
    finishedAdding()
  };

  return (
    <div className="ticketInfo">

      <fieldset id="ticket-info">
        <h5>
          <span className="type">{type}</span> TICKET
        </h5>
        <label htmlFor="fullname">
          Fullname{" "}
          <input
            type="text"
            name="fullname"
            className="fullname"
            autoComplete="name"
            onChange={finishedAdding}
          />
        </label>

        <label htmlFor="email">
          Email{" "}
          <input
            type="email"
            name="email"
            className="email"
            autoComplete="email"
            onChange={handleChange}
            value={message}
          />
          <span>{error}</span>
        </label>

        <label htmlFor="birthday">
          Birthday{" "}
          <input
            type="date"
            name="birthday"
            className="birthday"
            placeholder="BIRTHDAY"
            onChange={finishedAdding}
          />
        </label>
      </fieldset>
      {/*  <div className="button-container">
        <button>BACK</button>
        <button>NEXT</button>
      </div> */}
    </div>
  );
}

export default TicketInfo;
