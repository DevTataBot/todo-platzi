import React, { useContext } from "react";
import CreateTodoButton from "./Components/CreateTodo";
import TodoCounter from "./Components/TodoCounter";
import TodoList from "./Components/TodoList";
import TodoSearch from "./Components/TodoSearch";
import { TodoContext } from "./TodoContext";

const View = () => {
  const { error, loading, searchedTodos, completeTodos, deleteTodos } =
    useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {error && <p>Hubo un error</p>}
      {loading && <p>Loading</p>}
      {!loading && !searchedTodos.length > 0 && <p>Crea tu todo</p>}
      <TodoList
        list={searchedTodos}
        onComplete={completeTodos}
        onDelete={deleteTodos}
      />

      <CreateTodoButton />
    </>
  );
};

export default View;
