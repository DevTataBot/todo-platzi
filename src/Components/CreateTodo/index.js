import React from "react";
import "./styles.css";

const CreateTodoButton = () => {
  const createNewTask = () => {
    console.log("rcreando nueva tareita");
  };
  return (
    <button onClick={() => createNewTask()} className="CreateTodoButton">
      +
    </button>
  );
};

export default CreateTodoButton;
