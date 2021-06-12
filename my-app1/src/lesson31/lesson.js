import React from "react";
import ToDoItem from "./components/TodoItem";
import todosData from "./components/todoData";

class Lesson extends React.Component {
  constructor() {
    super();
    this.state = {
      todosData: todosData,
    };
  }
  render() {
    const toDosComponents = this.state.todosData.map((item) => (
      <ToDoItem key={item.id} item={item} />
    ));
    return <div>{toDosComponents}</div>;
  }
}

export default Lesson;
