function PopUp({ popUpIsOpen, onClosePopUp }) {
  return (
    <dialog open={popUpIsOpen} id="pop-up" onClick={() => onClosePopUp()}>
      <div id="band-details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium incidunt corporis eligendi dicta sed
          repellat laborum neque tempore suscipit perferendis! Maxime, rerum commodi harum tempora ullam sunt sit esse
          nam doloremque, saepe quasi obcaecati eaque laudantium officiis ut? Tenetur, necessitatibus. Quia unde dolore
          reprehenderit ut fuga voluptate quos labore eveniet.
        </p>
      </div>
    </dialog>
  );
}

export default PopUp;
