import React, { Component } from "react";
import { connect } from "react-redux";
import Cube from "react-3d-cube";
import styled from "styled-components";
const Box = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.themeToggle ? "#1c1e24" : "white")};
  color: ${(props) => (props.themeToggle ? "white" : "#1c1e24")};
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding-top: 10%;
  margin-left: 10%;
  font-family: arial;

  @media (max-width: 900px) {
    grid-template-columns: auto;
    margin-top: 100px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 10%;
`;

class UnconnectedCourtDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courtName: this.props.court.find(
        (e) => e.courtName === this.props.courtName
      ),
    };
  }

  render() {
    let themeToggle = this.props.theme;
    return (
      <Box themeToggle={themeToggle}>
        <Wrapper>
          <div
            style={{
              width: 300,
              height: 500,
              marginLeft: "15%",
            }}
          >
            <Cube size={500} index="front">
              {this.state.courtName.imagesPath.map((imagePath, idx) => {
                return <img src={`/uploads/${imagePath}`} key={idx} />;
              })}
            </Cube>
          </div>

          <Container>
            <h1>{this.state.courtName.courtName}</h1>
            <h4>{this.state.courtName.courtType} court</h4>
            <h4>{this.state.courtName.courtPhone}</h4>
            <h4>Open Hour( {this.state.courtName.openHour} )</h4>
            <h3 style={{ maxWidth: "500px" }}>
              {this.state.courtName.address}
            </h3>
          </Container>
        </Wrapper>
      </Box>
    );
  }
}
let mapStateToProps = (st) => {
  return {
    court: st.tennisCourts,
    theme: st.toggle,
  };
};
let CourtDetail = connect(mapStateToProps)(UnconnectedCourtDetail);

export default CourtDetail;
