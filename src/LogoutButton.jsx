import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedLogoutButton extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.toggle };
  }
  componentDidMount() {
    console.log(this.props.toggle);
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
let mapStateToProps = st => {
  return { toggle: st.button };
};
let LogoutButton = connect(mapStateToProps)(UnconnectedLogoutButton);
export default LogoutButton;
