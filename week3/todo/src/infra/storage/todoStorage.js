import { IdGenerator } from "./idGenerator";

function TodoStorage() {
  const todoString = localStorage.getItem("todo");
  let todos = todoString !== null ? JSON.parse(todoString) : [];
  const lastTodo = todos.reduce((lastTodo, currentTodo) => {
    if (currentTodo.id > lastTodo.id) {
      return currentTodo;
    }
    return lastTodo;
  });

  const idGenerator = IdGenerator(lastTodo.id);
  function add(todoText) {
    const newTodo = {
      id: idGenerator.execute(),
      text: todoText,
      completed: false,
    };

    todos = todos.concat(newTodo);
    localStorage.setItem("todo", JSON.stringify(todos));
  }

  function get() {
    return todos;
  }

  function complete(id) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    });
    localStorage.setItem("todo", JSON.stringify(todos));
  }

  function remove(id) {
    todos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todo", JSON.stringify(todos));
  }

  return {
    add,
    get,
    complete,
    remove,
  };
}

const todoStorage = TodoStorage();
export default todoStorage;
