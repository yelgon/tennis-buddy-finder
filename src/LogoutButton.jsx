import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedLogoutButton extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  handleChange = event => {
    this.setState({ checked: event.target.checked });
    console.log(this.state.checked);
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

let LogoutButton = connect()(UnconnectedLogoutButton);
export default LogoutButton;
