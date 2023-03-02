import React, { useEffect, useState } from "react";

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

export default useLocalStorage