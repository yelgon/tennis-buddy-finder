import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedLogoutButton extends Component {
  handleChange = event => {
    console.log(event.target.checked);
    this.props.dispatch({ type: "SET-TOGGLE", button: event.target.checked });
    console.log(this.props.toggle);
  };

  render() {
    return (
      <div className="center">
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
  return { toggle: st.toggle };
};
let LogoutButton = connect(mapStateToProps)(UnconnectedLogoutButton);
export default LogoutButton;
