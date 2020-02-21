import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideMenubar = styled.div`
  font-family: arial;
  ul li {
    display: block;
    line-height: 60px;
    height: 100%;
    width: 100%;
    font-size: 15px;
    color: white;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  .fas {
    margin-right: 10px;
  }
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  background: #042331;
`;

class Sidebar extends Component {
  render() {
    return (
      <SideMenubar>
        <ul>
          <li>
            <Link to="/home" style={{ color: "#FFF", textDecoration: "none" }}>
              <i className="fas fa-home"></i> HOME
            </Link>
          </li>
          <li>
            <Link to="/login" style={{ color: "#FFF", textDecoration: "none" }}>
              <i className="fas fa-highlighter"></i> LOGIN
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              style={{ color: "#FFF", textDecoration: "none" }}
            >
              <i className="fas fa-pen"></i> SIGNUP
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
              <i className="fas fa-calendar-check"></i> YOUR RESERVATION
            </Link>
          </li>
        </ul>
      </SideMenubar>
    );
  }
}

export default Sidebar;
