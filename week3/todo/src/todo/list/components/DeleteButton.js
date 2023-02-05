import React from "react";
import "../style.css";

export default function DeleteButton(props) {
  const { id } = props;
  return <button className="button">삭제</button>;
}
