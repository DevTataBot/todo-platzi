import React, { useState } from "react";
import "./styles.css";

const TodoSearch = ({setValueSearch, valueSearch}) => {
  const hanldeSearch = (e) => {
    setValueSearch(e.target.value)
  };
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
