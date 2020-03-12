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
    groundStroke: "20",
    returnOfServe: "20",
    netPlay: "20",
    serve: "20"
  });
  const [explanation, setExplanation] = useState(
    "New Player: Has no or limited tennis experience and is still working primarily on getting the ball into play."
  );

  const levelGuiding = event => {
    switch (event.target.value) {
      case "20":
        setExplanation(
          "New Player: Has no or limited tennis experience and is still working primarily on getting the ball into play."
        );
        setLevel({
          groundStroke: "20",
          returnOfServe: "20",
          netPlay: "20",
          serve: "20"
        });
        break;
      case "30":
        setExplanation(
          "Beginner Player: Needs on-court experience. Has obvious stroke weaknesses but is familiar with basic positions for singles and doubles play."
        );
        setLevel({
          groundStroke: "30",
          returnOfServe: "30",
          netPlay: "20",
          serve: "20"
        });
        break;
      case "40":
        setExplanation(
          "Beginner Player: Learning to judge where the ball is going although court coverage is weak. Can sustain a short rally of slow pace with other players of the same ability."
        );
        setLevel({
          groundStroke: "40",
          returnOfServe: "40",
          netPlay: "30",
          serve: "30"
        });
        break;
      case "50":
        setExplanation(
          "Beginner-Intermediate Player: Fairly consistent when hitting medium-paced shots, but is not comfortable with all strokes and lacks execution when trying for directional control, depth or power. Needs work on depth and variety."
        );
        setLevel({
          groundStroke: "50",
          returnOfServe: "50",
          netPlay: "35",
          serve: "35"
        });
        break;
      case "60":
        setExplanation(
          "Intermediate Player: Has achieved improved stroke dependability with directional control on moderate shots, but still lacks depth and variety. Starting to exhibit more aggressive net play and has improved court coverage."
        );
        setLevel({
          groundStroke: "60",
          returnOfServe: "60",
          netPlay: "50",
          serve: "50"
        });
        break;
      case "70":
        setExplanation(
          "Intermediate-Advanced Player: Has dependable strokes, including directional control and depth on both forehand and backhand sides plus the ability to use lobs, overheads, approach shots and volleys with some success. May be starting to master the use of power and spins (though tends to over-hit difficult shots). Rallies may be lost due to impatience."
        );
        setLevel({
          groundStroke: "70",
          returnOfServe: "70",
          netPlay: "65",
          serve: "65"
        });
        break;
      case "80":
        setExplanation(
          "Advanced Player: Starting to master the use of power and spins; can handle pace, has sound footwork, can control depth of shots and is beginning to vary game plan according to opponents. Can hit first serves with power and accuracy and place the second serve. May have played varsity or college club tennis."
        );
        setLevel({
          groundStroke: "80",
          returnOfServe: "80",
          netPlay: "70",
          serve: "70"
        });
        break;
      case "90":
        setExplanation("Expert");
        setLevel({
          groundStroke: "90",
          returnOfServe: "90",
          netPlay: "85",
          serve: "85"
        });
        break;
      default:
        setExplanation("");
        setLevel({
          groundStroke: "20",
          returnOfServe: "20",
          netPlay: "20",
          serve: "20"
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
      <select onChange={levelGuiding}>
        <option value="20">NTRP 1.5</option>
        <option value="30">NTRP 2.0</option>
        <option value="40">NTRP 2.5</option>
        <option value="50">NTRP 3.0</option>
        <option value="60">NTRP 3.5</option>
        <option value="70">NTRP 4.0</option>
        <option value="80">NTRP 4.5</option>
        <option value="90">NTRP 5.0</option>
      </select>
      <div>{explanation}</div>
      <Circles>
        <div style={circleContainerStyle}>
          <h2>Ground Stroke</h2>
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
          <h2>Return of serve</h2>
          <span>{parseInt(level.returnOfServe)}%</span>
          <Circle
            percent={parseInt(level.returnOfServe)}
            strokeWidth="8"
            strokeLinecap="round"
            strokeColor={color}
          />
        </div>
        <div style={circleContainerStyle}>
          <h2>Net Play</h2>
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
          <h2>Serve</h2>
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
