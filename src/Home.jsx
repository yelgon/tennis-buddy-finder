import React, { Component } from "react";
import Sidebar from "./Sidebar.jsx";
import { Route, BrowserRouter } from "react-router-dom";
import SimpleMap from "./SimpleMap.jsx";
import Login from "./Login.jsx";
import PlacesAuto from "./PlacesAuto.jsx";
import LogoutButton from "./LogoutButton.jsx";
import { connect } from "react-redux";
import PostCourt from "./PostCourt.jsx";
import MatchBoard from "./MatchBoard.jsx";
import CourtDetail from "./CourtDetail.jsx";
import LevelCategory from "./NationalTennisRatingProgram.jsx";
import Reservation from "./Reservation.jsx";

class UnconnectedHome extends Component {
  renderSimpleMap = () => {
    return <SimpleMap />;
  };
  renderLogin = routerData => {
    return <Login history={routerData.history} />;
  };
  renderPostPlayer = routerData => {
    if (!this.props.currentUser) {
      alert("Please log in first");
      return routerData.history.push("/login");
    }
    return <PlacesAuto />;
  };

  renderLevelGuide = () => {
    return <LevelCategory />;
  };
  renderPostCourt = routerData => {
    if (!this.props.currentUser) {
      alert("Please log in first");
      return routerData.history.push("/login");
    }
    return <PostCourt />;
  };
  renderMatchBoard = routerData => {
    if (!this.props.currentUser) {
      alert("Please log in first");
      return routerData.history.push("/login");
    }
    return <MatchBoard />;
  };
  renderTennisCourt = routerData => {
    return <CourtDetail courtName={routerData.match.params.court} />;
  };
  renderYourReservation = routerData => {
    if (!this.props.currentUser) {
      alert("Please log in first");
      return routerData.history.push("/login");
    }
    return <Reservation />;
  };
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <Sidebar />
          <LogoutButton />
        </div>
        <div>
          <Route exact={true} path="/" render={this.renderSimpleMap} />
          <Route exact={true} path="/login" render={this.renderLogin} />

          <Route
            exact={true}
            path="/matchBoard"
            render={this.renderMatchBoard}
          />
          <Route
            exact={true}
            path="/detail/:court"
            render={this.renderTennisCourt}
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
    currentUser: st.currentUser
    // query: st.searchQuery,
    // snup: st.signup,
    // lgin: st.loggedIn,
    // players: st.players,
    // courts: st.tennisCourts
  };
};
let Home = connect(mapStateToProps)(UnconnectedHome);
export default Home;
