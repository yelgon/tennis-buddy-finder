import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", border: "1px solid black" }}>
        <h2>{this.props.contents.name}</h2>
        <div>{this.props.contents.level}</div>
        <div>{this.props.contents.courtName}</div>
        <div>{this.props.contents.playType}</div>
        <div>{this.props.contents.dayOfTheWeek}</div>
        <div>{this.props.contents.month}</div>
        <div>{this.props.contents.day}</div>
        <div>{this.props.contents.year}</div>
        <div>{this.props.contents.time}</div>
      </div>
    );
  }
}

export default Post;
