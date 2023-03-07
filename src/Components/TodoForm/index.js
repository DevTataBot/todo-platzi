import React, { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext";

const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext)
  const [task, setTask] = useState()
  const onCancel = () => {
    setOpenModal(false)

  }
  const onCreate = (e) => {
    e.preventDefault()
    addTodo(task)
    setOpenModal(false)
  }
  const handleChange = (e) => {
    setTask(e.target.value)
  }
  return(
    <form onSubmit={onCreate}>
      <label>Crea una nueva tarea</label>
      <input 
        placeholder="Nueva tarea"
        value={task}
        onChange={handleChange}
      />
      <div>
        <button type="button" onClick={onCancel}>Cancelar</button>
        <button type='submit' onClick={onCreate}>Añadir</button>
      </div>
    </form>
  )
}

export default TodoForm