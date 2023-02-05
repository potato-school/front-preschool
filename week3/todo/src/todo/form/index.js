import React from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/action";
import AddButton from "./components/AddButton";
import TodoInput from "./components/TodoInput";
import "./style.css";

export default function TodoForm() {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const todoText = event.target["todo"].value;
    dispatch(addTodoAction(todoText));
    event.target["todo"].value = "";
  };

  return (
    <form className="todoForm" onSubmit={onSubmit}>
      <TodoInput />
      <AddButton />
    </form>
  );
}
