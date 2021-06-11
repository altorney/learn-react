import React from "react";
import ToDoItem from "./components/TodoItem";
import todosData from "./components/todoData";

function Lesson() {
  const toDosComponents = todosData.map((item) => (
    <ToDoItem key={item.id} item={item} />
  ));
  return <div>{toDosComponents}</div>;
}

export default Lesson;
