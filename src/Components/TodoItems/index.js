import React from "react";
import "./styles.css";
const TodoItems = ({ task, onComplete, onDelete }) => {
    const handlerCheckTask = () => {
        onComplete()
    }
    const handlerDeleteTask = () => {
        onDelete()
    }
  return (
    <li className="TodoItem">
      <input className="TodoItem__checkbox" type="checkbox" onChange={handlerCheckTask} />
      <div className={`TodoItem__container ${task.complete && 'complete'}`}>
        <span className={`TodoItem__item ${task.complete && 'complete__text'}`}>{task.text}</span>
        <button className="TodoItem__delete" onClick={handlerDeleteTask}>X</button>
      </div>
    </li>
  );
};

export default TodoItems;
