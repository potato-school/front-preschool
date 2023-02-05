import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./components/TodoItem";
import "./style.css";

export default function TodoList() {
  const todoList = useSelector((store) => store.todo);

  return (
    <ul className="todoList">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
