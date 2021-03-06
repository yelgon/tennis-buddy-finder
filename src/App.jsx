import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./Home.jsx";
import MainPage from "./page/MainPage.jsx";

class UnconnectedApp extends Component {
  componentDidMount() {
    this.AllPlayers();
    this.AllMatches();
    this.AllCourts();
  }
  AllPlayers = async () => {
    let response = await fetch("/all-players");
    let body = await response.text();
    console.log("all-players response", body);
    body = JSON.parse(body);
    this.props.dispatch({ type: "SET_PLAYERS", players: body });
  };
  AllCourts = async () => {
    let response = await fetch("/all-courts");
    let body = await response.text();
    console.log("all-courts response", body);
    body = JSON.parse(body);
    this.props.dispatch({ type: "SET_COURTS", court: body });
  };
  AllMatches = async () => {
    let response = await fetch("/all-matches");
    let body = await response.text();
    console.log("all-matches response", body);
    body = JSON.parse(body);
    this.props.dispatch({ type: "SET_MATCHES", match: body });
  };

  render = () => {
    if (this.props.page) {
      return <Home />;
    }
    return <MainPage />;
  };
}
let mapStateToProps = st => {
  return { page: st.page };
};
let App = connect(mapStateToProps)(UnconnectedApp);
export default App;
