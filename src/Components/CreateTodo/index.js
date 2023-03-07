import React from "react";
import "./styles.css";

const CreateTodoButton = ({setOpenModal, openModal}) => {
  const createNewTask = () => {
    setOpenModal(!openModal)
  };
  return (
    <button onClick={() => createNewTask()} className="CreateTodoButton">
      +
    </button>
  );
};

export default CreateTodoButton;
