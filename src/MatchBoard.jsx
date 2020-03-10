import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import Post from "./Post.jsx";
import { connect } from "react-redux";

class UnconnectedMatchBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: new Date(),
      level: "",
      courtName: "",
      playType: "",
      dayOfTheWeek: "",
      month: "",
      day: "",
      year: "",
      time: ""
    };
  }
  dateHandler = e => {
    console.log(e);
    const dataToString = e.toString().split(" ");
    this.setState({ date: e });
    this.setState({ dayOfTheWeek: dataToString[0] });
    this.setState({ month: dataToString[1] });
    this.setState({ day: dataToString[2] });
    this.setState({ year: dataToString[3] });
    this.setState({ time: dataToString[4].split(":")[0] });
  };
  nameHandler = e => {
    this.setState({ name: e.target.value });
  };
  levelHandler = e => {
    this.setState({ level: e.target.value });
  };
  courtHandler = e => {
    this.setState({ courtName: e.target.value });
  };
  typeHandler = e => {
    this.setState({ playType: e.target.value });
  };
  submitHandler = async event => {
    event.preventDefault();
    let data = new FormData();
    data.append("name", this.state.name);
    data.append("level", this.state.level);
    data.append("courtName", this.state.courtName);
    data.append("playType", this.state.playType);
    data.append("dayOfTheWeek", this.state.dayOfTheWeek);
    data.append("month", this.state.month);
    data.append("day", this.state.day);
    data.append("year", this.state.year);
    data.append("time", this.state.time);
    fetch("/new-match", { method: "POST", body: data });
    alert("New match uploaded");
    this.setState({
      name: "",
      date: "",
      level: "",
      courtName: "",
      playType: "",
      dayOfTheWeek: "",
      month: "",
      day: "",
      year: "",
      time: ""
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.submitHandler}>
          <div>
            NAME :
            <input
              type="text"
              value={this.state.name}
              onChange={this.nameHandler}
            />
          </div>

          <div>
            LEVEL :
            <input
              type="text"
              value={this.state.level}
              onChange={this.levelHandler}
            />
          </div>
          <div>
            COURT NAME:
            <input
              type="text"
              value={this.state.courtName}
              onChange={this.courtHandler}
            />
          </div>
          <div>
            PLAY TYPE :
            <input
              type="text"
              value={this.state.playType}
              onChange={this.typeHandler}
            />
          </div>
          <div>
            DATE:{" "}
            <DateTimePicker
              onChange={this.dateHandler}
              value={this.state.date}
            />
          </div>
          <input type="submit" value="POST" />
        </form>
        {this.props.matches.map(p => (
          <Post key={p._id} contents={p} user={this.props.currentUser} />
        ))}
      </div>
    );
  }
}
let mapStateToProps = st => {
  return {
    matches: st.matches,
    currentUser: st.currentUser
  };
};
let MatchBoard = connect(mapStateToProps)(UnconnectedMatchBoard);
export default MatchBoard;
