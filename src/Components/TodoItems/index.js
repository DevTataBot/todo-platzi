import React from "react";

const TodoItems = ({task}) => {
    return (
        task.map(list =>
            <div>{list.text}</div>)
    )
}

export default TodoItems