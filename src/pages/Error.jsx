import React from "react";

function Error() {
  const url = window.location.href;
  const style = {
    display: "flex",
    gap: "2rem",
    justifyItems: "center",
    padding: "1rem",
    minHeight: "75vh",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  }
  const h1Style = {
    color: "transparent",
    WebkitTextStrokeWidth: "3px",
  WebkitTextStrokeColor:"#0ee4f3"
  }


  return (
    <>
      <div style={style}>
        <h1 style={h1Style}>404</h1>
        <p>{url}</p>
        <p>Sorry the page you're looking for does not exsist</p>
      </div>
    </>
  );
}

export default Error;
