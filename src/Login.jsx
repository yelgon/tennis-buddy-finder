import React, { Component } from "react";
import { connect } from "react-redux";
import SocialLogin from "./SocialLogin.jsx";
import styled from "styled-components";

const Input = styled.div`
  input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    font-size: 17px;
    background: none;
  }

  width: 100%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  padding-bottom: 0;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-left: 46px;
  text-align: center;
  margin-bottom: 27px;
  font-family: Arial, Helvetica, sans-serif;
`;
const Image = styled.div`
  @media (max-width: 685px) {
    display: none;
  }
  img {
    object-fit: cover;
    height: fit-content;
  }
`;

const Main = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  text-align: center;
  width: 97%;
  height: 100vh;
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  margin-left: 20px;
  align-items: center;
  background-color: ${props => (props.themeToggle ? "#1c1e24" : "white")};
  color: ${props => (props.themeToggle ? "white" : "#1c1e24")};
`;

class UnconnectedLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameInput: "",
      passwordInput: ""
    };
  }
  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  usernameChange = event => {
    this.setState({ usernameInput: event.target.value });
  };
  passwordChange = event => {
    this.setState({ passwordInput: event.target.value });
  };
  signupSubmitHandler = event => {
    event.preventDefault();
    let data = new FormData();
    data.append("username", this.state.usernameInput);
    data.append("password", this.state.passwordInput);
    fetch("/signup", { method: "POST", body: data });
    alert("Signup success");
    this.setState({ usernameInput: "", passwordInput: "" });
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
    let themeToggle = this.props.theme;
    return (
      <Main themeToggle={themeToggle}>
        <Image>
          <img src="/static/section3.jpg" />
        </Image>
        <div>
          <div className="sign">Signup</div>
          <form onSubmit={this.signupSubmitHandler} className="form1">
            <Input>
              <input
                type="text"
                placeholder="Username"
                value={this.state.usernameInput}
                onChange={this.usernameChange}
              ></input>
            </Input>
            <Input>
              <input
                type="password"
                placeholder="Password"
                value={this.state.passwordInput}
                onChange={this.passwordChange}
              ></input>
            </Input>
            <div>
              <input type="submit" value="SIGNUP" className="submit" />
            </div>
          </form>
          <div className="sign">Login</div>
          <form onSubmit={this.submitHandler} className="form1">
            <Input>
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              ></input>
            </Input>
            <Input>
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              ></input>
            </Input>
            <div>
              <input type="submit" value="LOGIN" className="submit" />
            </div>
            <SocialLogin />
          </form>
        </div>
      </Main>
    );
  };
}
let mapStateToProps = st => {
  return { theme: st.toggle };
};
let Login = connect(mapStateToProps)(UnconnectedLogin);
export default Login;
