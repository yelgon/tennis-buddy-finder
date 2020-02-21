import React, { Component } from "react";
import SimpleMap from "./SimpleMap.jsx";
import SocialLogin from "./SocialLogin.jsx";
import InputAddress from "./PlacesAuto.jsx";

class App extends Component {
  render = () => {
    return (
      <div>
        <div>
          <InputAddress />
        </div>
        <div>
          <SocialLogin />
          <SimpleMap />
        </div>
      </div>
    );
  };
}

export default App;
