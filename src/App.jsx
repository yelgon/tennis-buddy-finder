import React, { Component } from "react";
import SimpleMap from "./SimpleMap.jsx";
import SocialLogin from "./SocialLogin.jsx";

class App extends Component {
  render = () => {
    return (
      <div>
        <SocialLogin />
        <SimpleMap />
      </div>
    );
  };
}

export default App;
