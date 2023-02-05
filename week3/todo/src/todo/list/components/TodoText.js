import React from "react";
import "../style.css";

export default function TodoText(props) {
  const { text } = props;

  return <p className="todoText">{text}</p>;
}
