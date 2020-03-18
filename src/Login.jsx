import React, { Component } from "react";
import { connect } from "react-redux";
import SocialLogin from "./SocialLogin.jsx";
import { Link } from "react-router-dom";
import Signup from "./Signup.jsx";

class UnconnectedLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  submitHandler = async event => {
    event.preventDefault();
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    let response = await fetch("/login", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    if (body.success) {
      alert("Login Success");
      this.props.dispatch({ type: "login-success", user: this.state.username });
      this.setState({ username: "", password: "" });
      this.props.history.push("/");
    }
  };

  render = () => {
    return (
      <div>
        <Signup />
        <div>Login</div>
        <form onSubmit={this.submitHandler} style={{ textAlign: "center" }}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            ></input>
          </div>
          <div>
            <input type="submit" value="LOGIN" />
          </div>
          <SocialLogin />
        </form>
      </div>
    );
  };
}
let Login = connect()(UnconnectedLogin);
export default Login;
