import React, { useState } from "react";
import styled from "styled-components";
import { Circle } from "rc-progress";

const Wrapper = styled.div`
  margin-left: 25%;
`;
const Circles = styled.div`
  /* display: flex; */
`;

function LevelCategory() {
  const [level, setLevel] = useState({
    groundStroke: "10",
    returnOfServe: "10",
    netPlay: "10",
    serve: "10"
  });
  const [title, setTitle] = useState("New Player");
  const [explanation, setExplanation] = useState([
    "Has no experience",
    "Or limited tennis experience",
    "is stille primarily on getting the ball into play"
  ]);

  const levelGuiding = event => {
    switch (event.target.value) {
      case "10":
        setTitle("New Player");
        setExplanation([
          "Has no experience",
          "Or limited tennis experience",
          "Is still primarily on getting the ball into play"
        ]);
        setLevel({
          groundStroke: "10",
          returnOfServe: "10",
          netPlay: "10",
          serve: "10"
        });
        break;
      case "20":
        setTitle("Beginner Player");
        setExplanation([
          "Needs on-court experience",
          "Has obvious stroke weakness",
          "Is familiar with basic positions"
        ]);
        setLevel({
          groundStroke: "20",
          returnOfServe: "20",
          netPlay: "20",
          serve: "20"
        });
        break;
      case "30":
        setTitle("Beginner Player");
        setExplanation([
          "Learning to judge where the ball is going althought coverage is weak",
          "Can sustain a short rally of slow pace",
          "can rally 6 balls in a row"
        ]);
        setLevel({
          groundStroke: "30",
          returnOfServe: "30",
          netPlay: "30",
          serve: "30"
        });
        break;
      case "50":
        setTitle("Beginner-Intermediate Player");
        setExplanation([
          "Fairly consistent when hitting medium-paced shots",
          "Lacks of execution when trying for directional control",
          "Needs work on depth and variety"
        ]);
        setLevel({
          groundStroke: "50",
          returnOfServe: "50",
          netPlay: "35",
          serve: "35"
        });
        break;
      case "60":
        setTitle("Intermediate Player");
        setExplanation([
          "Has achieved improved stroke",
          "Starting to exhibit more aggressive net play",
          "Has improved court coverage"
        ]);
        setLevel({
          groundStroke: "60",
          returnOfServe: "60",
          netPlay: "50",
          serve: "50"
        });
        break;
      case "70":
        setTitle("Intermediate-Advanced Player");
        setExplanation([
          "Has dependable strokes with power",
          "Use lobs, overheads, approach shots and volleys with some success",
          "Rallies may be lost due to impatience"
        ]);
        setLevel({
          groundStroke: "70",
          returnOfServe: "70",
          netPlay: "65",
          serve: "65"
        });
        break;
      case "80":
        setTitle("Advanced Player");
        setExplanation([
          "Starting to master the use of power and spins",
          "Can handle pace and sound footwork",
          "Can hit first serves with power and accuracy and place the second serve",
          "May have played varsity or college club tennis"
        ]);
        setLevel({
          groundStroke: "90",
          returnOfServe: "90",
          netPlay: "85",
          serve: "85"
        });
        break;
      case "90":
        setTitle("Expert Player");
        setExplanation([
          "Able to maintain a consistent rally on 10 fast balls",
          "Very steady strokes or has a dominant shot",
          "Periodically succeeds when sttempting a quality shot"
        ]);
        setLevel({
          groundStroke: "100",
          returnOfServe: "100",
          netPlay: "95",
          serve: "95"
        });
        break;
      default:
        setTitle("New Player");
        setExplanation([
          "Learning to judge where the ball is going althought coverage is weak",
          "Can sustain a short rally of slow pace",
          "can rally 7 balls in a row"
        ]);
        setLevel({
          groundStroke: "10",
          returnOfServe: "10",
          netPlay: "10",
          serve: "10"
        });
        break;
    }
  };
  const circleContainerStyle = {
    width: "100px",
    height: "100px",
    display: "inline-block",
    textAlign: "center",
    marginBottom: "85px",
    marginRight: "7px",
    marginLeft: "7px"
  };
  const colorMap = ["#ccff13", "#6fdf87", "#4ccdd1", "#2f5acf", "#df5f2d"];
  const color = colorMap[parseInt(Math.random() * 5, 10)];
  return (
    <Wrapper>
      <div>Tennis - Self-Rating Guide</div>
      <h4>National Tennis Rating Program</h4>
      <select onChange={levelGuiding}>
        <option value="10">NTRP 1.5</option>
        <option value="20">NTRP 2.0</option>
        <option value="30">NTRP 2.5</option>
        <option value="50">NTRP 3.0</option>
        <option value="60">NTRP 3.5</option>
        <option value="70">NTRP 4.0</option>
        <option value="80">NTRP 4.5</option>
        <option value="90">NTRP 5.0</option>
      </select>
      <div>{title}</div>
      <ul>
        {explanation.map((e, idx) => {
          return <li key={idx}>{e}</li>;
        })}
      </ul>
      <Circles>
        <div style={circleContainerStyle}>
          <div>Ground Stroke</div>
          <div>(forehand and backhand)</div>
          <span>{parseInt(level.groundStroke)}%</span>
          <Circle
            percent={parseInt(level.groundStroke)}
            strokeWidth="8"
            strokeLinecap="round"
            strokeColor={color}
          />
        </div>

        <div style={circleContainerStyle}>
          <div>Return of serve</div>
          <span>{parseInt(level.returnOfServe)}%</span>
          <Circle
            percent={parseInt(level.returnOfServe)}
            strokeWidth="8"
            strokeLinecap="round"
            strokeColor={color}
          />
        </div>
        <div style={circleContainerStyle}>
          <div>Net Play</div>
          <div>(volleys and overheads)</div>
          <span>{parseInt(level.netPlay)}%</span>
          <Circle
            percent={parseInt(level.netPlay)}
            strokeWidth="8"
            strokeLinecap="round"
            strokeColor={color}
          />
        </div>
        <div style={circleContainerStyle}>
          <div>Serve</div>
          <span>{parseInt(level.serve)}%</span>
          <Circle
            percent={parseInt(level.serve)}
            strokeWidth="8"
            strokeLinecap="round"
            strokeColor={color}
          />
        </div>
      </Circles>
    </Wrapper>
  );
}

export default LevelCategory;
