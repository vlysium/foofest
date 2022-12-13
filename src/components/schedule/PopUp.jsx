import { useRef } from "react";

function PopUp({ popUpIsOpen, onClosePopUp, data }) {
  // destructure data object
  const { name, members, logo, logoCredits, bio, genre } = data;

  const content = useRef(null);

  function displayImage() {
    if (logo.includes("https://")) {
      return logo;
    }
    const pattern = /(jpg|png)/i; // regex that captures "jpg" or "png", not case sensitive
    return `/logos/${logo.replace(pattern, "webp")}`;
  }

  function displayBandMembers() {
    // convert array to string and join the items
    const arrayToString = members.join(", ");

    // replace the last ", " with " and "
    const replaceLastComma =
      arrayToString.substring(0, arrayToString.lastIndexOf(",")) +
      " and " +
      arrayToString.substring(arrayToString.lastIndexOf(",") + 2);

    // don't concatinate text if there is only 1 member
    return members.length === 1 ? members.join("") : replaceLastComma;
  }

  function handleClick() {
    // scroll to the top when closed
    content.current.scroll({
      top: 0,
    });
    onClosePopUp();
  }

  return (
    <dialog open={popUpIsOpen} id="pop-up" onClick={() => handleClick()}>
      <div id="band-details">
        <button id="close-pop-up" onClick={() => handleClick()}></button>
        <img src={logo ? displayImage() : null} alt={"An image representing " + name} id="details-logo" />
        <div ref={content}>
          {logoCredits ? <p id="details-logo-credits">{"Image credits: " + logoCredits}</p> : null}
          <p id="details-genre">{genre}</p>
          <h3 id="details-band-name">{name}</h3>
          <p id="details-band-members">{members ? displayBandMembers() : null}</p>
          <h4>About</h4>
          <p id="details-bio">{bio}</p>
        </div>
      </div>
    </dialog>
  );
}

export default PopUp;

/*
  name: string
  members: array
  logo: string
  logoCredits: string
  bio: string
  genre: string
*/
