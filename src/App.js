import React, { useEffect, useState } from "react";
import CreateTodoButton from "./Components/CreateTodo";
import TodoCounter from "./Components/TodoCounter";
import TodoList from "./Components/TodoList";
import TodoSearch from "./Components/TodoSearch";

const useLocalStorage = (itemName, initialValue) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem("TODOS_V1");
        let parsedTodos;

        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedTodos = initialValue;
        } else {
          parsedTodos = JSON.parse(localStorageTodos);
        }
        setTodos(parsedTodos);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  }, []);

  const saveTodos = (newTodos) => {
    try {
      const strTodos = JSON.stringify(newTodos);
      setTodos(newTodos);
      localStorage.setItem(itemName, strTodos);
    } catch (error) {
      setError(error);
    }
  };

  return { todos, saveTodos, loading, error };
};

const App = () => {
  const { todos, saveTodos, loading, error } = useLocalStorage("TODOS_V1", []);

  const [valueSearch, setValueSearch] = useState("");

  const completedTodos = todos.filter((e) => !!e.complete).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  searchedTodos =
    valueSearch.length <= 1
      ? todos
      : todos.filter((todo) =>
          todo.text.toLowerCase().includes(valueSearch.toLowerCase())
        );

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = true;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />
      {error && <p>Hubo un error</p>}
      {loading && <p>Loading</p>}
      {!loading && !searchedTodos.length > 0 && <p>Crea tu todo</p>}
      <TodoList
        list={searchedTodos}
        onComplete={completeTodos}
        onDelete={deleteTodos}
      />

      <CreateTodoButton />
    </>
  );
};

export default App;
