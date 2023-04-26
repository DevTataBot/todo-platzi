import React from "react";
import "./styles.css";

const CreateTodoButton = ({setOpenModal, openModal}) => {
  const createNewTask = () => {
    setOpenModal(!openModal)
  };
  return (
    <button onClick={() => createNewTask()} className="CreateTodoButton">
      {openModal ? 'x' : '+'}
    </button>
  );
};

export default CreateTodoButton;
