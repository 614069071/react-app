import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "./../container";
import { Connect } from "../store";
import { login, register } from "../store/actions";

@Connect
@Container({})
class About extends Component {
  changeUsername = () => {
    const { dispatch } = this.props;
    const action = login("I'm Jeet");
    dispatch(action);
  };

  changeNickname = () => {
    const { dispatch } = this.props;

    const action = register("我叫小黑");
    dispatch(action);
  };

  render() {
    return (
      <div className="about">
        <p>我是store上的数据：{this.props.state.login.username}</p>
        <p>我是store上的数据：{this.props.state.register.nickname}</p>
        <button onClick={this.changeUsername}>change username</button>
        <button onClick={this.changeNickname}>change nickname</button>
        <Link to="/">go to home</Link>
      </div>
    );
  }
}

export default About;
