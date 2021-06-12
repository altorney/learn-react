import React from "react";

class Lesson extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedin: true,
    };
  }
  render() {
    return (
      <div>
        <h1>You are currently logged ({this.state.loggedin ? "in" : "out"})</h1>
      </div>
    );
  }
}
export default Lesson;
