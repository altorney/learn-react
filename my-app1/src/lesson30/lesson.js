import React from "react";

class Lesson extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <img
          src="https://www.fillmurray.com/200/100"
          onMouseOver={() => console.log("I was hovered over")}
        ></img>
        <br />
        <br />
        <br />
        <button onClick={alert(11)}></button>
      </div>
    );
  }
}
export default Lesson;
