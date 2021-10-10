import React from "react";

class Lesson extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedin: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return { loggedin: !prevState.loggedin };
    });
  }
  render() {
    return (
      <div>
        Logged {this.state.loggedin ? "in" : "out"}
        <br />
        <br />
        <br />
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}
export default Lesson;
