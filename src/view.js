import React, { useContext } from "react";
import CreateTodoButton from "./Components/CreateTodo";
import Modal from "./Components/Modal";
import TodoCounter from "./Components/TodoCounter";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoSearch from "./Components/TodoSearch";
import { TodoContext } from "./TodoContext";
import logo from "./assets/background.svg";

const View = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    restartTodo,
  } = useContext(TodoContext);

  return (
    <section className="TodoView">
      <div className="TodoView-img">
        <img className="img" src={logo} alt="img-decoration" />
      </div>
      <div className="TodoView-todo">
        <TodoCounter />
        <TodoSearch />
        {error && <p>Hubo un error</p>}
        {loading && <p>Loading</p>}
        {!loading && !searchedTodos.length > 0 && <p>Crea tu todo</p>}
        <TodoList
          list={searchedTodos}
          onComplete={completeTodos}
          onClearComplete={restartTodo}
          onDelete={deleteTodos}
        />

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </section>
  );
};

export default View;
