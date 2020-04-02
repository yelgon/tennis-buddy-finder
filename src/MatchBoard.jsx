import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import Post from "./Post.jsx";
import { connect } from "react-redux";
import styled from "styled-components";

const PageName = styled.h1`
  position: absolute;
  top: 5%;
  text-align: center;
  width: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${props => (props.themeToggle ? "#2d2d2d" : "white")};
  color: ${props => (props.themeToggle ? "white" : "black")};
`;

const Wrapper = styled.div`
  max-width: 97%;
  margin-left: 25px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding-top: 10%;
  grid-gap: 1.2rem;
`;

const NewMatch = styled.div`
  border: 2px solid;
  padding: 15px;
  font-size: 13px;
  font-weight: bold;
  width: 300px;
  box-shadow: 5px 10px ${props => (props.themeToggle ? "#f1404b" : "#13334c")};
  border-radius: 15px;
  .menu {
    display: grid;
    grid-template-columns: auto auto;
    padding: 5px;
    justify-content: space-between;
    input {
      width: 195px;
    }
  }
`;
const NewMatchButton = styled.div`
  text-align: center;
  margin-top: 20px;

  input {
    height: 40px;
    width: 120px;
    border-radius: 20px;
    :hover {
      cursor: pointer;
      background-color: ${props => (props.themeToggle ? "#f1404b" : "#263859")};
    }
  }
`;
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
    let themeToggle = this.props.theme;
    return (
      <Container themeToggle={themeToggle}>
        <PageName>Match Board</PageName>
        <Wrapper>
          {this.props.matches.map(p => (
            <Post key={p._id} contents={p} user={this.props.currentUser} />
          ))}
          <NewMatch themeToggle={themeToggle}>
            <form onSubmit={this.submitHandler}>
              <div className="menu">
                <div>NAME</div>
                <div>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.nameHandler}
                  />
                </div>
              </div>

              <div className="menu">
                <div>LEVEL</div>
                <div>
                  <input
                    type="text"
                    value={this.state.level}
                    onChange={this.levelHandler}
                  />
                </div>
              </div>
              <div className="menu">
                <div>WHERE</div>
                <div>
                  <input
                    type="text"
                    value={this.state.courtName}
                    onChange={this.courtHandler}
                  />
                </div>
              </div>
              <div className="menu">
                <div>TYPE</div>
                <div>
                  <input
                    type="text"
                    value={this.state.playType}
                    onChange={this.typeHandler}
                  />
                </div>
              </div>
              <div className="menu">
                <div>DATE</div>
                <div>
                  <DateTimePicker
                    onChange={this.dateHandler}
                    value={this.state.date}
                  />
                </div>
              </div>
              <NewMatchButton themeToggle={themeToggle}>
                <input type="submit" value="NEW MATCH" />
              </NewMatchButton>
            </form>
          </NewMatch>
        </Wrapper>
      </Container>
    );
  }
}
let mapStateToProps = st => {
  return {
    matches: st.matches,
    currentUser: st.currentUser,
    theme: st.toggle
  };
};
let MatchBoard = connect(mapStateToProps)(UnconnectedMatchBoard);
export default MatchBoard;
