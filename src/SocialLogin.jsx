import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

class SocialLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facebookUser: "",
      facebookEamil: "",
      facebookPicture: "",
      googleName: "",
      googleEmail: "",
      googlePicture: ""
    };
  }

  responseFacebook = response => {
    this.setState({
      facebookUser: response.name,
      facebookEamil: response.email,
      facebookPicture: response.picture.data.url
    });
  };
  responseGoogle = response => {
    this.setState({
      googleName: response.profileObj.name,
      googleEmail: response.profileObj.email,
      googlePicture: response.profileObj.imageUrl
    });
  };
  render() {
    return (
      <div>
        <FacebookLogin
          appId="224984985202688"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
        <div>
          {this.state.facebookEamil}
          {this.state.facebookUser}
          <img src={this.state.facebookPicture} />
        </div>
        <GoogleLogin
          clientId="219077069962-h5o4uoad3nvg7ou2d5947pvpqi97kbue.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <div>
          {this.state.googleEmail}
          {this.state.googleName}
          <img height=" 50px" src={this.state.googlePicture} />
        </div>
      </div>
    );
  }
}

export default SocialLogin;
