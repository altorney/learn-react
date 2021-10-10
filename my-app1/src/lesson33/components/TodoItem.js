import React from "react";

function ToDoItem(props) {
  // console.log(props);
  return (
    <label style={{ display: "block" }}>
      <input
        type="checkbox"
        onChange={() => props.handleChange(props.item.id)}
        id={props.item.id}
        checked={props.item.completed}
      />
      <span>{props.item.text}</span>
    </label>
  );
}

export default ToDoItem;
