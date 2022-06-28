import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoItem } from "../components/TodoItem/TodoItem";

export const AppUI = ({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodos,
  deleteTodo,
}) => {
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
};
