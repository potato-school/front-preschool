import React from "react";
import AddButton from "./components/AddButton";
import TodoInput from "./components/TodoInput";
import "./style.css";

export default function TodoForm() {
  return (
    <form className="todoForm">
      <TodoInput />
      <AddButton />
    </form>
  );
}
