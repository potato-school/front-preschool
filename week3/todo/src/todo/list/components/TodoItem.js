import React from "react";
import CompleteButton from "./CompleteButton";
import DeleteButton from "./DeleteButton";
import TodoText from "./TodoText";
import "../style.css";

export default function TodoItem(props) {
  const { todo } = props;

  return (
    <li className="todoItem">
      <TodoText text={todo.text} />
      <div>
        <CompleteButton id={todo.id} />
        <DeleteButton id={todo.id} />
      </div>
    </li>
  );
}
