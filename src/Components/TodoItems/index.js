import React from "react";
import "./styles.css";
import { FaRegCheckSquare } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineMinusSquare } from "react-icons/ai";

const TodoItems = ({ task, onComplete, onDelete, onClearComplete }) => {
  const handlerCheckTask = (value) => {
    value ? onComplete() : onClearComplete();
  };
  const handlerDeleteTask = () => {
    onDelete();
  };
  return (
    <li className="TodoItem">
      <button className="TodoItem__checkbox" onClick={() => handlerCheckTask(!task.complete)}>
      {task.complete ? (
        <div className="checked">
          <FaRegCheckSquare className="svg" />
        </div>
      ) : (
        <div className="no-checked">
          <AiOutlineMinusSquare className="svg" />
        </div>
      )}
      </button>
      <div className={`TodoItem__container ${task.complete && "complete"}`}>
        <span className={`TodoItem__item ${task.complete && "complete__text"}`}>
          {task.text}
        </span>
        <button className="TodoItem__delete" onClick={handlerDeleteTask}>
          <RiDeleteBin5Line  className="svg"/>
        </button>
      </div>
    </li>
  );
};

export default TodoItems;
