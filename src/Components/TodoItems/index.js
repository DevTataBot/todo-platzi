import React from "react";
import "./styles.css";
const TodoItems = ({ task }) => {
  return (
    <div className="TodoItem">
      <input className="TodoItem__checkbox" type="checkbox" />
      <div className="TodoItem__container">
        <li className="TodoItem__item">{task.text}</li>
        <button className="TodoItem__delete">X</button>
      </div>
    </div>
  );
};

export default TodoItems;
