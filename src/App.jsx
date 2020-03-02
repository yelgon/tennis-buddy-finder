import React, { Component } from "react";
import Sidebar from "./Sidebar.jsx";
import { Route, BrowserRouter } from "react-router-dom";
import SimpleMap from "./SimpleMap.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import PlacesAuto from "./PlacesAuto.jsx";
import LogoutButton from "./LogoutButton.jsx";
import LevelGuide from "./LevelGuide.jsx";
import { connect } from "react-redux";
import PostCourt from "./PostCourt.jsx";

class UnconnectedApp extends Component {
  //   constructor(props){
  //     super(props)
  //     this.state={store:[]}
  //   }
  componentDidMount() {
    this.AllPlayers();
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

  renderHome = () => {
    return <SimpleMap />;
  };
  renderSignup = () => {
    return <Signup />;
  };
  renderLogin = () => {
    return <Login />;
  };
  renderPostPlayer = () => {
    return <PlacesAuto />;
  };
  renderMain = () => {
    return <section></section>;
  };
  renderLevelGuide = () => {
    return <LevelGuide />;
  };
  renderPostCourt = () => {
    return <PostCourt />;
  };
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <Sidebar />
          <LogoutButton />
        </div>
        <div>
          <Route exact={true} path="/" render={this.renderMain} />
          <Route exact={true} path="/home" render={this.renderHome} />
          <Route exact={true} path="/login" render={this.renderLogin} />
          <Route exact={true} path="/signup" render={this.renderSignup} />
          <Route
            exact={true}
            path="/matchBoard"
            render={this.renderMatchBoard}
          />
          <Route
            exact={true}
            path="/postPlayer"
            render={this.renderPostPlayer}
          />
          <Route exact={true} path="/postCourt" render={this.renderPostCourt} />
          <Route
            exact={true}
            path="/LevelGuide"
            render={this.renderLevelGuide}
          />
          <Route
            exact={true}
            path="/yourReservation"
            render={this.renderYourReservation}
          />
        </div>
      </BrowserRouter>
    );
  };
}
let mapStateToProps = st => {
  return {
    // query: st.searchQuery,
    // snup: st.signup,
    // lgin: st.loggedIn,
    // players: st.players,
    // courts: st.tennisCourts
  };
};
let App = connect(mapStateToProps)(UnconnectedApp);
export default App;
