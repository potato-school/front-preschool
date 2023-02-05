import React from "react";
import TodoTitle from "./title";
import TodoForm from "./form";
import "./style.css";
import TodoList from "./list";

export default function Todo() {
  return (
    <div className="todo">
      <TodoTitle />
      <TodoForm />
      <TodoList />
    </div>
  );
}
