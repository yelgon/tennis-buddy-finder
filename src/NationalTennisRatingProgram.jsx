import React, { useState } from "react";

function LevelCategory() {
  const [level, setLevel] = useState({
    value: "20",
    groundStroke: "20",
    returnOfServe: "20",
    netPlay: "20",
    serve: "20"
  });
  const [explanation, setExplanation] = useState("");

  const levelGuiding = event => {};

  return;
  <div>
    <h2>Tennis - Self-Rating Guide</h2>
    <select onChange={this.levelGuiding}>
      <option value="20">NTRP 1.5</option>
      <option value="30">NTRP 2.0</option>
      <option value="40">NTRP 2.5</option>
      <option value="50">NTRP 3.0</option>
      <option value="60">NTRP 3.5</option>
      <option value="70">NTRP 4.0</option>
      <option value="80">NTRP 4.5</option>
      <option value="90">NTRP 5.0</option>
    </select>
  </div>;
}

export default LevelCategory;
