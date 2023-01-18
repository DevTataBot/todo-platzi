import React from "react";
import TodoCounter from "./Components/TodoCounter";
import TodoItems from "./Components/TodoItems";
import TodoSearch from "./Components/TodoSearch";

const App = () => {
  const todos = [
    {text: 'Tarea tuturutu', complete: false},
    {text: 'Tarea tuturut2', complete: false},
    {text: 'Estudiar', complete: false}
  ]
  return (
   <>
    <TodoCounter/>
    <TodoSearch />
    <TodoItems task={todos} />
    </>
   
  )
}

export default App