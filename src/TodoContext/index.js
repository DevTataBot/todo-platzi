import React, { createContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const { todos, saveTodos, loading, error } = useLocalStorage("TODOS_V1", []);

  const [valueSearch, setValueSearch] = useState("");
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter((e) => !!e.complete).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  searchedTodos =
    valueSearch.length <= 1
      ? todos
      : todos.filter((todo) =>
          todo.text.toLowerCase().includes(valueSearch.toLowerCase())
        );

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = true;
    saveTodos(newTodos);
  };

  const restartTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = false;
    saveTodos(newTodos);
  }
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      complete: false,
      text
    })
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completeTodos,
        valueSearch,
        searchedTodos,
        setValueSearch,
        completedTodos,
        deleteTodos,
        openModal,
        setOpenModal,
        addTodo,
        restartTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
