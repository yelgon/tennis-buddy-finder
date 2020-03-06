import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedCourtDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courtName: this.props.court.find(
        e => e.courtName === this.props.courtName
      )
    };
  }
  componentDidMount() {
    console.log(this.props.court.imagesPath);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>Court Detail</div>
        <div>{this.state.courtName.courtName}</div>
        <div>{this.state.courtName.courtType}</div>
        <div>{this.state.courtName.courtPhone}</div>
        <div>{this.state.courtName.openHour}</div>
        <div>{this.state.courtName.address}</div>
      </div>
    );
  }
}
let mapStateToProps = st => {
  return {
    court: st.tennisCourts
  };
};
let CourtDetail = connect(mapStateToProps)(UnconnectedCourtDetail);

export default CourtDetail;
