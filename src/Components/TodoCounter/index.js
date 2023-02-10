import React from "react";
import './styles.css'

const TodoCounter = ({total, completed}) => {
    return(
        <h2 className="TodoCounter">
            Has completado {completed} de {total} Todos
        </h2>
    )
}

export default TodoCounter