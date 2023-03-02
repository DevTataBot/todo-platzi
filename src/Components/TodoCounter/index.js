import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import './styles.css'

const TodoCounter = () => {
    const { completedTodos, totalTodos} = useContext(TodoContext)
    return(
        <h2 className="TodoCounter">
            Has completado {completedTodos} de {totalTodos} Todos
        </h2>
    )
}

export default TodoCounter