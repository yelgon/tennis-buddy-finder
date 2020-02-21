import React, { Component } from "react";
import Sidebar from "./Sidebar.jsx";
import { Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
// import SimpleMap from "./SimpleMap.jsx";
// import SocialLogin from "./SocialLogin.jsx";
// import PlacesAuto from "./PlacesAuto.jsx";

const MainPage = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

class App extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <MainPage>
          <div>
            <Sidebar />
          </div>
          <div>
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
            <Route
              exact={true}
              path="/postCourt"
              render={this.renderPostCourt}
            />
            <Route
              exact={true}
              path="lLevelGuide"
              render={this.renderLevelGuide}
            />
            <Route
              exact={true}
              path="/yourReservation"
              render={this.renderYourReservation}
            />
          </div>
        </MainPage>
      </BrowserRouter>
    );
  };
}

export default App;

{
  /* <div>
          <PlacesAuto />
        </div>
        <div>
          <SocialLogin />
          <SimpleMap />
        </div> */
}
