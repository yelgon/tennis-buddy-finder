import React, { Component } from "react";
import { connect } from "react-redux";
import Cube from "react-3d-cube";
import styled from "styled-components";

const CubeImage = styled.div`
  img {
    border: 1px solid black;
  }
`;

class UnconnectedCourtDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courtName: this.props.court.find(
        e => e.courtName === this.props.courtName
      )
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center", paddingTop: "100px" }}>
        <div>
          <div
            style={{
              width: 300,
              height: 300,
              marginLeft: "35%"
            }}
          >
            <Cube size={400} index="front">
              {this.state.courtName.imagesPath.map((imagePath, idx) => {
                return (
                  <CubeImage>
                    <img
                      height="300px"
                      width="300px"
                      src={`/uploads/${imagePath}`}
                      key={idx}
                    />
                  </CubeImage>
                );
              })}
            </Cube>
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>Court Detail</div>
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
