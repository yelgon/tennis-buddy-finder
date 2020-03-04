import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UnorderedList = styled.div`
  li {
    border-bottom: 1px solid black;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

class Sidebar extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-times" id="cancel"></i>
        </label>

        <div className="sidebar">
          <header>My App</header>
          <ul style={{ margin: "0", padding: "0" }}>
            <UnorderedList>
              <li>
                <Link
                  to="/home"
                  style={{ color: "#FFF", textDecoration: "none" }}
                >
                  <i className="fas fa-home"></i> HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  style={{ color: "#FFF", textDecoration: "none" }}
                >
                  <i className="fas fa-highlighter"></i> LOGIN
                </Link>
              </li>
              <li>
                <Link
                  to="/matchBoard"
                  style={{ color: "#FFF", textDecoration: "none" }}
                >
                  <i className="fas fa-file"></i> MATCH BOARD
                </Link>
              </li>
              <li>
                <Link
                  to="/postPlayer"
                  style={{ color: "#FFF", textDecoration: "none" }}
                >
                  <i className="fas fa-link"></i> POST PLAYER
                </Link>
              </li>
              <li>
                <Link
                  to="/postCourt"
                  style={{ color: "#FFF", textDecoration: "none" }}
                >
                  <i className="fas fa-edit"></i> POST COURT
                </Link>
              </li>
              <li>
                <Link
                  to="/levelGuide"
                  style={{ color: "#FFF", textDecoration: "none" }}
                >
                  <i className="fas fa-glasses"></i> LEVEL GUIDE
                </Link>
              </li>
              <li>
                <Link
                  to="/yourReservation"
                  style={{ color: "#FFF", textDecoration: "none" }}
                >
                  <i className="fas fa-calendar-check"></i> YOUR MATCHES
                </Link>
              </li>
            </UnorderedList>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
