import React, { Component } from "react";
import { Circle } from "rc-progress";

class TennisLevel extends Component {
  constructor() {
    super();
    this.state = {
      forehandPercent: 10,
      backhandPercent: 10,
      servePercent: 10,
      volleyPercent: 10,
      color: "#3FC7FA"
    };
    this.changeStateBeginner = this.changeStateBeginner.bind(this);
    this.changeStateBeginner2 = this.changeStateBeginner2.bind(this);
    this.changeStateIntermediate = this.changeStateIntermediate.bind(this);
    this.changeStateIntermediate2 = this.changeStateIntermediate2.bind(this);
    this.changeStateAdvance = this.changeStateAdvance.bind(this);
    this.changeStateAdvance2 = this.changeStateAdvance2.bind(this);
  }

  changeStateBeginner() {
    const colorMap = ["#ccff13", "#6fdf87", "#4ccdd1", "#2f5acf", "#df5f2d"];
    const forehandValue = parseInt(Math.random() * (30 - 10) + 10, 10);
    const backhandValue = parseInt(Math.random() * (20 - 10) + 10, 10);
    const serveValue = parseInt(Math.random() * (20 - 10) + 10, 10);
    const volleyValue = parseInt(Math.random() * (20 - 10) + 10, 10);

    this.setState({
      forehandPercent: forehandValue,
      backhandPercent: backhandValue,
      servePercent: serveValue,
      volleyPercent: volleyValue,
      color: colorMap[parseInt(Math.random() * 5, 10)]
    });
  }
  changeStateBeginner2() {
    const colorMap = ["#ccff13", "#6fdf87", "#4ccdd1", "#2f5acf", "#df5f2d"];
    const forehandValue = parseInt(Math.random() * (50 - 30) + 30, 10);
    const backhandValue = parseInt(Math.random() * (40 - 20) + 20, 10);
    const serveValue = parseInt(Math.random() * (40 - 20) + 20, 10);
    const volleyValue = parseInt(Math.random() * (30 - 20) + 20, 10);

    this.setState({
      forehandPercent: forehandValue,
      backhandPercent: backhandValue,
      servePercent: serveValue,
      volleyPercent: volleyValue,
      color: colorMap[parseInt(Math.random() * 5, 10)]
    });
  }
  changeStateIntermediate() {
    const colorMap = ["#9416dd", "#e06b27", "#4da8dd", "#9cc213", "#28caaf"];
    const forehandValue = parseInt(Math.random() * (60 - 45) + 45, 10);
    const backhandValue = parseInt(Math.random() * (60 - 50) + 50, 10);
    const serveValue = parseInt(Math.random() * (55 - 50) + 50, 10);
    const volleyValue = parseInt(Math.random() * (55 - 40) + 40, 10);

    this.setState({
      forehandPercent: forehandValue,
      backhandPercent: backhandValue,
      servePercent: serveValue,
      volleyPercent: volleyValue,
      color: colorMap[parseInt(Math.random() * 5, 10)]
    });
  }
  changeStateIntermediate2() {
    const colorMap = ["#9416dd", "#e06b27", "#4da8dd", "#9cc213", "#28caaf"];
    const forehandValue = parseInt(Math.random() * (80 - 65) + 65, 10);
    const backhandValue = parseInt(Math.random() * (75 - 60) + 60, 10);
    const serveValue = parseInt(Math.random() * (70 - 50) + 50, 10);
    const volleyValue = parseInt(Math.random() * (70 - 40) + 40, 10);

    this.setState({
      forehandPercent: forehandValue,
      backhandPercent: backhandValue,
      servePercent: serveValue,
      volleyPercent: volleyValue,
      color: colorMap[parseInt(Math.random() * 5, 10)]
    });
  }
  changeStateAdvance() {
    const colorMap = ["#dd1691", "#00ff00", "#f70088", "#0172cf", "#ff0040"];
    const forehandValue = parseInt(Math.random() * (90 - 80) + 80, 10);
    const backhandValue = parseInt(Math.random() * (90 - 80) + 80, 10);
    const serveValue = parseInt(Math.random() * (90 - 80) + 80, 10);
    const volleyValue = parseInt(Math.random() * (90 - 80) + 80, 10);

    this.setState({
      forehandPercent: forehandValue,
      backhandPercent: backhandValue,
      servePercent: serveValue,
      volleyPercent: volleyValue,
      color: colorMap[parseInt(Math.random() * 5, 10)]
    });
  }
  changeStateAdvance2() {
    const colorMap = ["#dd1691", "#00ff00", "#f70088", "#0172cf", "#ff0040"];
    const forehandValue = parseInt(Math.random() * (100 - 95) + 95, 10);
    const backhandValue = parseInt(Math.random() * (100 - 95) + 95, 10);
    const serveValue = parseInt(Math.random() * (100 - 95) + 95, 10);
    const volleyValue = parseInt(Math.random() * (100 - 95) + 95, 10);

    this.setState({
      forehandPercent: forehandValue,
      backhandPercent: backhandValue,
      servePercent: serveValue,
      volleyPercent: volleyValue,
      color: colorMap[parseInt(Math.random() * 5, 10)]
    });
  }
  render() {
    const {
      forehandPercent,
      backhandPercent,
      servePercent,
      volleyPercent,
      color
    } = this.state;

    const circleContainerStyle = {
      width: "170px",
      height: "170px",
      display: "inline-block",
      textAlign: "center",
      marginBottom: "85px",
      marginRight: "7px",
      marginLeft: "7px"
    };
    return (
      <div className="tennisLevelWrapper">
        <div className="level">
          <button tydive="button" onClick={this.changeStateBeginner}>
            2.0
          </button>
          <button tydive="button" onClick={this.changeStateBeginner2}>
            2.5
          </button>
          <button tydive="button" onClick={this.changeStateIntermediate}>
            3.0
          </button>
          <button tydive="button" onClick={this.changeStateIntermediate2}>
            3.5
          </button>
          <button tydive="button" onClick={this.changeStateAdvance}>
            4.0
          </button>
          <button tydive="button" onClick={this.changeStateAdvance2}>
            4.5
          </button>
        </div>

        <div className="circle">
          <div style={circleContainerStyle}>
            <h2>Forehand </h2>
            <span>{forehandPercent}%</span>
            <Circle
              percent={forehandPercent}
              strokeWidth="8"
              strokeLinecap="round"
              strokeColor={color}
            />
          </div>

          <div style={circleContainerStyle}>
            <h2>Backhand </h2>
            <span>{backhandPercent}%</span>
            <Circle
              percent={backhandPercent}
              strokeWidth="8"
              strokeLinecap="round"
              strokeColor={color}
            />
          </div>
          <div style={circleContainerStyle}>
            <h2>Serve </h2>
            <span>{servePercent}%</span>
            <Circle
              percent={servePercent}
              strokeWidth="8"
              strokeLinecap="round"
              strokeColor={color}
            />
          </div>
          <div style={circleContainerStyle}>
            <h2>Volley</h2>
            <span>{volleyPercent}%</span>
            <Circle
              percent={volleyPercent}
              strokeWidth="8"
              strokeLinecap="round"
              strokeColor={color}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default TennisLevel;
