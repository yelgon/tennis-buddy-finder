import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonName: "" };
  }
  componentDidMount() {
    console.log(this.props.user, this.props.contents.name);
    if (this.props.user === this.props.contents.name) {
      return this.setState({ buttonName: "Delete" });
    }
    this.setState({ buttonName: "Participate" });
  }
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
        <div>{this.props.contents.time}h</div>
        <button>{this.state.buttonName}</button>
      </div>
    );
  }
}

export default Post;
