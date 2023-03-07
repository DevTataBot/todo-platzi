import React from "react";
import "./styles.css";
const TodoItems = ({ task, onComplete, onDelete, onClearComplete }) => {
    const handlerCheckTask = (e) => {
      e.target.checked ? onComplete() : onClearComplete()
    }
    const handlerDeleteTask = () => {
        onDelete()
    }
  return (
    <li className="TodoItem">
      <input className="TodoItem__checkbox" type="checkbox" checked={task.complete} onChange={handlerCheckTask} />
      <div className={`TodoItem__container ${task.complete && 'complete'}`}>
        <span className={`TodoItem__item ${task.complete && 'complete__text'}`}>{task.text}</span>
        <button className="TodoItem__delete" onClick={handlerDeleteTask}>X</button>
      </div>
    </li>
  );
};

export default TodoItems;
