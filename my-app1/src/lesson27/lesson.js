import React from "react";
import ToDoItem from "./components/TodoItem";
import todosData from "./components/todoData";

class Lesson extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "I have state",
    };
  }
  render() {
    const toDosComponents = todosData.map((item) => (
      <ToDoItem key={item.id} item={item} />
    ));
    return (
      <div>
        <h1>my heading with state = {this.state.answer} </h1>
        {toDosComponents}
      </div>
    );
  }
}

export default Lesson;
