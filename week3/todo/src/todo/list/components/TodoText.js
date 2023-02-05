import React from "react";
import "../style.css";

export default function TodoText(props) {
  const { text, completed } = props;
  const completedStyle = completed ? "completed" : "";

  return <p className={`todoText ${completedStyle}`}>{text}</p>;
}
