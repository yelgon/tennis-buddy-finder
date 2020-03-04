import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", date: new Date(), level: "", court: "", type: "" };
  }
  dateHandler = e => {
    console.log(typeof e);
    console.log(e);

    this.setState({ date: e });
  };
  nameHandler = e => {
    this.setState({ name: e.target.value });
  };
  levelHandler = e => {
    this.setState({ level: e.target.value });
  };
  courtHandler = e => {
    this.setState({ court: e.target.value });
  };
  typeHandler = e => {
    this.setState({ type: e.target.value });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.submitHandler}>
          <div>
            NAME :<input type="text" onChange={this.nameHandler} />
          </div>
          <div>
            DATE:{" "}
            <DateTimePicker
              onChange={this.dateHandler}
              value={this.state.date}
              // maxDetail="hour"
            />
          </div>
          <div>
            LEVEL :<input type="text" onChange={this.levelHandler} />
          </div>
          <div>
            COURT :<input type="text" onChange={this.courtHandler} />
          </div>
          <div>
            TYPE :<input type="text" onChange={this.typeHandler} />
          </div>
          <input type="submit" value="POST" />
        </form>
        <div>date:{this.state.date.toString()}</div>
        <div>name:{this.state.name}</div>
        <div>level:{this.state.level}</div>
        <div>court:{this.state.court}</div>
        <div>type:{this.state.type}</div>
      </div>
    );
  }
}

export default Match;
