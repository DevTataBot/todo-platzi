import React from "react";
import TodoCounter from "./Components/TodoCounter";

const App = () => {
  const todos = [
    {text: 'Tarea tuturutu', complete: false},
    {text: 'Tarea tuturut2', complete: false},
    {text: 'Estudiar', complete: false}
  ]
  return (
   <>
    <TodoCounter/>
    <input placeholder='Todo'/>
    {todos.map(list =>
      <div>{list.text}</div>)}
    </>
   
  )
}

export default App