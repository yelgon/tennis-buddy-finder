import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedLogoutButton extends Component {
  handleChange = event => {
    this.props.dispatch({ type: "SET-TOGGLE", button: event.target.checked });
  };

  render() {
    return (
      <div className="center">
        <h2 style={{ color: "#0099CC", marginLeft: "10px" }}>
          {this.props.user}
        </h2>
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
  return { toggle: st.toggle, user: st.currentUser };
};
let LogoutButton = connect(mapStateToProps)(UnconnectedLogoutButton);
export default LogoutButton;
