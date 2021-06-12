import React from "react";

class Lesson extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <img
          src="https://www.fillmurray.com/200/100"
          onMouseOver={() => console.log("I was hovered over")}
        ></img>
        <br />
        <h1>{this.state.count}</h1>
        <br />
        <br />
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}
export default Lesson;
