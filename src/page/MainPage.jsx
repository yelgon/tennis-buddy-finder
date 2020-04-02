import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Center = styled.div`
  img {
    transform: translate(-50%, 100%);
    position: absolute;
    left: 50%;
    top: 60%;
    border-radius: 2em;
  }
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: #0058a5;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-505, -50%);
  }
  .ball {
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: #c9f364;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    animation: animate 1.5s linear infinite;
    :hover {
      cursor: pointer;
    }
  }
  .ball:before {
    content: "";
    position: absolute;
    width: 96%;
    height: 96%;
    border-radius: 50%;
    box-sizing: transparent;
    border: 5px solid #fff;
    left: -65%;
    filter: blur(1px);
  }
  .ball:after {
    content: "";
    position: absolute;
    width: 96%;
    height: 96%;
    border-radius: 50%;
    box-sizing: transparent;
    border: 5px solid #fff;
    right: -65%;
    filter: blur(1px);
  }
  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) translateY(-200px) rotate(0deg);
    }
    50% {
      transform: translate(-50%, -50%) translateY(0px) rotate(180deg);
    }
    100% {
      transform: translate(-50%, -50%) translateY(-200px) rotate(360deg);
    }
  }
  .shadow {
    position: absolute;
    width: 150px;
    height: 50px;
    transform: translate(-50%, 100%);
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    z-index: -1;
    filter: blur(2px);
    animation: shadow 1.5s linear infinite;
  }
  @keyframes shadow {
    0% {
      transform: translate(-50%, 100%) scale(1);
    }
    50% {
      transform: translate(-50%, 100%) scale(0.5);
    }
    100% {
      transform: translate(-50%, 100%) scale(1);
    }
  }
`;

class UnconnectedMainPage extends Component {
  passingThePage = () => {
    this.props.dispatch({ type: "SET-firstPage" });
  };

  render() {
    return (
      <Center>
        <div className="center">
          <div className="ball" onClick={this.passingThePage}></div>
          <div className="shadow"></div>
        </div>
        <img src="/static/logo.png" />
      </Center>
    );
  }
}

let MainPage = connect()(UnconnectedMainPage);
export default MainPage;
