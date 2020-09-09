import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  increment = () => {
    let { num } = this.state;
    this.setState({ num: num++ });
  };

  render() {
    const { num = 0 } = this.state;
    return (
      <div className="home">
        <p>num:{num}</p>
        <button>sum++</button>
        <button>sum--</button>
        <p>
          <Link to="/about">go to about</Link>
        </p>
      </div>
    );
  }
}
