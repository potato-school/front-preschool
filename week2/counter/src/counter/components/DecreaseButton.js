import React from "react";

function DecreaseButton(props) {
  const { onClick, label } = props;
  return <button onClick={onClick}>{label}</button>;
}

export default DecreaseButton;
