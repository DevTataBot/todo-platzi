import React, { useState } from "react";
import CreateTodoButton from "./Components/CreateTodo";
import TodoCounter from "./Components/TodoCounter";
import TodoList from "./Components/TodoList";
import TodoSearch from "./Components/TodoSearch";

const App = () => {
  const [valueSearch, setValueSearch] = useState("");

  const todosTem = [
    { text: "Tarea tuturutu", complete: false },
    { text: "Tarea tuturut2", complete: true },
    { text: "Estudiar", complete: false },
  ];

  const [todos, setTodos] = useState(todosTem);
  const completedTodos = todos.filter((e) => !!e.complete).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  searchedTodos = valueSearch.length <= 1
    ? todos
    : todos.filter(todo => todo.text.toLowerCase().includes(valueSearch.toLowerCase()))

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].complete = true
    setTodos(newTodos)
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }



  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />
      <TodoList list={searchedTodos} onComplete={completeTodos} onDelete={deleteTodos} />
      <CreateTodoButton />
    </>
  );
};

export default App;
