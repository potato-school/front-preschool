import React from "react";
import TodoItem from "./components/TodoItem";
import "./style.css";

export default function TodoList() {
  const todo = {
    id: 1,
    text: "oo 컨텐츠 테이블 & 엔티티 설계",
  };

  return (
    <ul className="todoList">
      <TodoItem key={todo.id} todo={todo} />
    </ul>
  );
}
