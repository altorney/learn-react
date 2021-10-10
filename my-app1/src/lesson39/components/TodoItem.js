import React from "react";
import cx from "classnames";

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
      <span
        className={cx({
          completed: props.item.completed,
          incomplete: !props.item.completed,
        })}
      >
        {props.item.text}
      </span>
    </label>
  );
}

export default ToDoItem;
