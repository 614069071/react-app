import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  increment = (type) => {
    let { num } = this.state;
    type === "+" ? num++ : num--;
    this.setState({ num });
  };

  render() {
    const { num = 0 } = this.state;
    return (
      <div className="home">
        <p>num:{num}</p>
        <button onClick={() => this.increment("+")}>sum++</button>
        <button onClick={() => this.increment("-")}>sum--</button>
        <p>
          <Link to="/about">go to about</Link>
        </p>
      </div>
    );
  }
}
