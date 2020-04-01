import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  .item-d {
    grid-area: footer;
    margin-top: 5px;
  }
  font-weight: bold;
  box-shadow: 5px 10px ${props => (props.themeToggle ? "#040000" : "#2b2b2b")};
  padding: 15px;
  font-size: 15px;
  width: 300px;
  border: 3px solid black;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr, 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "menu item"
    "menu item"
    "menu item"
    "menu item"
    "menu item"
    "menu item"
    ". footer";
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: start;
  :hover {
    background-color: ${props => (props.themeToggle ? "#032030" : "#5bd1d7")};
    transform: scale(0.98, 0.98);
  }
  button {
    height: 30px;
    border-radius: 15px;
    :hover {
      transform: scale(1.2, 1.2);
      background-color: ${props => (props.themeToggle ? "#FE9000" : "#ff6768")};
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

class UnconnectedPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonName: "",
      participate: this.props.contents.participants
    };
  }
  componentDidMount() {
    if (this.props.user === this.props.contents.name) {
      return this.setState({ buttonName: "Delete" });
    }
    this.setState({ buttonName: "Participate" });
  }

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

    let data = new FormData();
    data.append("participant", this.props.user);
    data.append("_id", this.props.contents._id);
    fetch("/participate", { method: "POST", body: data });
    alert(`You are joining ${this.props.contents.name}'s game`);
  };
  render() {
    let themeToggle = this.props.theme;
    return (
      <Container themeToggle={themeToggle}>
        <div>Organizer</div>
        <div>{this.props.contents.name}</div>
        <div>Where</div>
        <div>{this.props.contents.courtName}</div>
        <div>When</div>
        <div>
          {this.props.contents.month} {this.props.contents.day}{" "}
          {this.props.contents.dayOfTheWeek}, {this.props.contents.time}h
        </div>
        <div>Level</div>
        <div>{this.props.contents.level}</div>
        <div>Play Type</div>
        <div>{this.props.contents.playType}</div>
        <div>Participants</div>
        <div>
          {this.state.participate.map((participant, idx) => {
            return (
              <div style={{ marginBottom: "3px" }} key={idx}>
                {participant}{" "}
              </div>
            );
          })}
        </div>
        <div className="item-d">
          <button onClick={this.clickHandler}>{this.state.buttonName}</button>
        </div>
      </Container>
    );
  }
}
let mapStateToProps = st => {
  return { theme: st.toggle };
};
let Post = connect(mapStateToProps)(UnconnectedPost);
export default Post;
