import React from "react";
import TodoTitle from "./title";
import TodoForm from "./form";
import "./style.css";

export default function Todo() {
  return (
    <div className="todo">
      <TodoTitle />
      <TodoForm />
    </div>
  );
}
