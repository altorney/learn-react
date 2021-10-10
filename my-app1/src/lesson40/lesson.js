import react from "react";

class Lesson extends react.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      catfacts: {},
    };
  }

  loadData(data) {
    this.setState({ catfacts: data, loading: false });
  }
  //   renderFacts(data) {
  //     this.setState({ catfacts: data });
  //     console.log(this.state);
  //     // return this.state.catfacts.map((item, index) => (
  //     //   <span key={index}>dd</span>
  //     // ));
  //   }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => response.json())
      .then((data) => this.loadData(data));
  }

  render() {
    let text = "";
    if (this.state && this.state.catfacts && this.state.catfacts.length > 0) {
      text = this.state.catfacts[0].text;
    }

    return (
      <div>
        {this.state.loading ? "is loading" : ""} {text}
      </div>
    );
  }
}

export default Lesson;
