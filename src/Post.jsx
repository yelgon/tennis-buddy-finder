import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonName: "",
      participate: this.props.contents.participants
    };
  }
  componentDidMount() {
    this.isParticipantFull();
    console.log(
      this.props.user,
      this.props.contents.name,
      this.props.contents.participants
    );
    if (this.props.user === this.props.contents.name) {
      return this.setState({ buttonName: "Delete" });
    }
    this.setState({ buttonName: "Participate" });
  }
  isParticipantFull = () => {
    if (
      this.props.contents.playType === "double" &&
      this.props.contents.participants.length >= 4
    ) {
      return this.setState({ buttonName: "FULL" });
    } else if (
      this.props.contents.playType === "single" &&
      this.props.contents.participants.length >= 2
    ) {
      return this.setState({ buttonName: "FULL" });
    }
  };
  clickHandler = async () => {
    if (this.state.buttonName === "Delete") {
      let data = new FormData();
      data.append("_id", this.props.contents._id);
      fetch("/delete-match", { method: "POST", body: data });
      alert(
        `your match on ${this.props.contents.month} ${this.props.contents.day}, ${this.props.contents.time}h has been deleted`
      );
      return;
    } else if (this.state.buttonName === "FULL") {
      return alert("This match is full try others");
    }
    this.setState({
      participate: this.state.participate.concat(this.props.user)
    });
    this.isParticipantFull();
    console.log(this.props.contents._id);
    let data = new FormData();
    data.append("participant", this.props.user);
    data.append("_id", this.props.contents._id);
    fetch("/participate", { method: "POST", body: data });
  };
  render() {
    return (
      <div style={{ textAlign: "center", border: "1px solid black" }}>
        <h2>Organizer: {this.props.contents.name}</h2>
        <div>Level: {this.props.contents.level}</div>
        <div>Court Name:{this.props.contents.courtName}</div>
        <div>Play Type: {this.props.contents.playType}</div>
        <div>
          Participants :{" "}
          {this.state.participate.map((participant, idx) => {
            return <p key={idx}>{participant}</p>;
          })}
        </div>
        <div>Day of the Week: {this.props.contents.dayOfTheWeek}</div>
        <div>Month: {this.props.contents.month}</div>
        <div>Day: {this.props.contents.day}</div>
        <div>Year: {this.props.contents.year}</div>
        <div>Time{this.props.contents.time}h</div>
        <button onClick={this.clickHandler}>{this.state.buttonName}</button>
      </div>
    );
  }
}

export default Post;
