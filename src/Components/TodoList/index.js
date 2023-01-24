import React from "react";
import TodoItems from "../TodoItems";
import './styles.css'
const TodoList = ({ list }) => {
  return (
    <ul className="TodoList">
      {list.map((task) => (
        <TodoItems task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
