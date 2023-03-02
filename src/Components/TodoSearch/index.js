import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./styles.css";

const TodoSearch = () => {
  const {setValueSearch, valueSearch} = useContext(TodoContext)
  const hanldeSearch = (e) => setValueSearch(e.target.value)
  return (
    <div className="TodoSearch">
      <input
        className="TodoSearch__input"
        placeholder="Todo"
        onChange={hanldeSearch}
        value={valueSearch}
      />
    </div>
  );
};

export default TodoSearch;
