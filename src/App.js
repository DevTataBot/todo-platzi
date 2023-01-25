import React, { useState } from "react";
import CreateTodoButton from "./Components/CreateTodo";
import TodoCounter from "./Components/TodoCounter";
import TodoList from "./Components/TodoList";
import TodoSearch from "./Components/TodoSearch";

const App = () => {
  const [valueSearch, setValueSearch] = useState('')

  const todos = [
    { text: "Tarea tuturutu", complete: false },
    { text: "Tarea tuturut2", complete: true },
    { text: "Estudiar", complete: false },
  ];
  return (
    <>
      <TodoCounter />
      <TodoSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />
      <TodoList list={todos} />
      <CreateTodoButton />
    </>
  );
};

export default App;
