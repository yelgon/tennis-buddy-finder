import React, { Component } from "react";
import Sidebar from "./Sidebar.jsx";
import { Route, BrowserRouter } from "react-router-dom";
import SimpleMap from "./SimpleMap.jsx";
import SocialLogin from "./SocialLogin.jsx";
import PlacesAuto from "./PlacesAuto.jsx";
import LogoutButton from "./LogoutButton.jsx";
import LevelGuide from "./LevelGuide.jsx";

class App extends Component {
  renderHome = () => {
    return <SimpleMap />;
  };
  renderLogin = () => {
    return <SocialLogin />;
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

export default App;
