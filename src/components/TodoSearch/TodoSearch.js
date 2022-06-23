import React from "react";
import "./TodoSearch.css";

export const TodoSearch = ({ state, setState }) => {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  };

  return (
    <>
      <input
        placeholder="Cebolla"
        className="TodoSearch"
        value={state}
        onChange={onSearchValueChange}
      />
    </>
  );
};
