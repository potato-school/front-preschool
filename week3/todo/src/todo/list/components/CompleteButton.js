import React from "react";
import { useDispatch } from "react-redux";
import { completeTodoAction } from "../../store/action";
import "../style.css";

export default function CompleteButton(props) {
  const { id } = props;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(completeTodoAction(id));
  };

  return (
    <button className="button" onClick={onClick}>
      완료
    </button>
  );
}
