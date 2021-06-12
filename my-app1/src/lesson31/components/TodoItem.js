import React from "react";

function ToDoItem(props) {
  return (
    <label style={{ display: "block" }}>
      <input
        type="checkbox"
        onChange={() => console.log("i have been checked")}
        id={props.item.id}
        checked={props.item.completed}
      />
      <span>{props.item.text}</span>
    </label>
  );
}

export default ToDoItem;
