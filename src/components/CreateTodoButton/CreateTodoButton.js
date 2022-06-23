import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = (props) => {
  const onClickButton = (mensaje) => {
    alert(mensaje);
  };

  return (
    <>
      <button
        className="CreateTodoButton"
        onClick={() => {
          onClickButton("Acá va el modal");
        }}
      >
        +
      </button>
    </>
  );
};
