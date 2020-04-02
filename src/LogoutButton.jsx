import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
const HoverPopup = styled.div`
  margin-bottom: 20px;
  font-size: 15px;
  font-style: italic;
  opacity: 0;
`;
const CurrentUser = styled.h2`
  color: ${props => (props.themeToggle ? "#0099cc" : "#17223b")};
  margin-left: 5px;
  &:hover > ${HoverPopup} {
    opacity: 1;
  }
  :hover {
    cursor: pointer;
  }
`;

class UnconnectedLogoutButton extends Component {
  handleChange = event => {
    this.props.dispatch({ type: "SET-TOGGLE", button: event.target.checked });
  };
  handleLogout = () => {
    this.props.dispatch({ type: "SET-LOGOUT" });
  };
  render() {
    let themeToggle = this.props.theme;
    return (
      <div>
        <div className="center">
          <CurrentUser themeToggle={themeToggle} onClick={this.handleLogout}>
            <HoverPopup>Click name to Logout</HoverPopup>
            {this.props.user}
          </CurrentUser>
          <input
            type="checkbox"
            name=""
            className="checkbox"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
let mapStateToProps = st => {
  return { toggle: st.toggle, user: st.currentUser, theme: st.toggle };
};
let LogoutButton = connect(mapStateToProps)(UnconnectedLogoutButton);
export default LogoutButton;
