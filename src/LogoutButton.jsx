import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const CurrentUser = styled.h2`
  color: ${props => (props.themeToggle ? "#0099cc" : "#17223b")};
  margin-left: 5px;
`;

class UnconnectedLogoutButton extends Component {
  handleChange = event => {
    this.props.dispatch({ type: "SET-TOGGLE", button: event.target.checked });
  };

  render() {
    let themeToggle = this.props.theme;
    return (
      <div className="center">
        <CurrentUser themeToggle={themeToggle}>{this.props.user}</CurrentUser>
        <input
          type="checkbox"
          name=""
          className="checkbox"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
let mapStateToProps = st => {
  return { toggle: st.toggle, user: st.currentUser, theme: st.toggle };
};
let LogoutButton = connect(mapStateToProps)(UnconnectedLogoutButton);
export default LogoutButton;
