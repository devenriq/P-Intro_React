import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";

// import "./App.css";

const defaultTodos = [
  { task: "cortar cebolla", completed: false },
  { task: "ir al baño", completed: false },
  { task: "llorar toda la noche", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.task.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.task === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.task === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch state={searchValue} setState={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            text={todo.task}
            key={todo.task}
            completed={todo.completed}
            onComplete={() => {
              completeTodos(todo.task);
            }}
            onDelete={() => {
              deleteTodo(todo.task);
            }}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
