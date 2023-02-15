import React from "react";
import { useDispatch } from "react-redux";
import todoStorage from "../../../infra/storage/todoStorage";
import { deleteTodoAction } from "../../store/action";
import "../style.css";

export default function DeleteButton(props) {
  const { id } = props;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteTodoAction(id));
    todoStorage.remove(id);
  };

  return (
    <button className="button" onClick={onClick}>
      삭제
    </button>
  );
}
