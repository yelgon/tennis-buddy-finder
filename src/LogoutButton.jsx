import React, { Component } from "react";

class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }
  handleChange = event => {
    this.setState({ checked: event.target.checked });
    console.log(this.state);
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

export default LogoutButton;
