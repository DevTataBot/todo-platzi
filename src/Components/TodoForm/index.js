import React, { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext";
import './styles.css'
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
    <div className="form-container">
      <form onSubmit={onCreate} className="form-content">
      <label className="form-label">Crea una nueva tarea</label>
      <input 
        className="form-input"
        placeholder="Nueva tarea"
        value={task}
        onChange={handleChange}
      />
      <div className="form-buttons">
        <button type="button" onClick={onCancel}>Cancelar</button>
        <button type='submit' onClick={onCreate}>Añadir</button>
      </div>
    </form> 
    </div>
   
  )
}

export default TodoForm