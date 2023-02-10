import React from "react";
import TodoItems from "../TodoItems";
import './styles.css'
const TodoList = ({ list, onComplete, onDelete }) => {
  return (
    <ul className="TodoList">
      {list.map((task) => (
        <TodoItems
        task={task}
        onComplete={()=> onComplete(task.text)} 
        onDelete={() => onDelete(task.text)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
