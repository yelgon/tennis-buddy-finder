import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import styled from "styled-components";

const FacebookWrapper = styled.div`
  font-size: 10px;
  padding: 10px;
  border: 1px solid red;
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  align-items: center;

  button {
    height: 60px;
    font-size: 1.5rem;
    width: 100px;
  }
`;

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
    console.log(response);
    this.setState({
      googleName: response.profileObj.name,
      googleEmail: response.profileObj.email,
      googlePicture: response.profileObj.imageUrl
    });
  };
  render() {
    return (
      <FacebookWrapper>
        <FacebookLogin
          appId="224984985202688"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          textButton="f"
        />
        <GoogleLogin
          clientId="219077069962-h5o4uoad3nvg7ou2d5947pvpqi97kbue.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />

        {/* <div>
          {this.state.facebookEamil}
          {this.state.facebookUser}
          <img src={this.state.facebookPicture} />
        </div>

        <div>
          {this.state.googleEmail}
          {this.state.googleName}
          <img height=" 50px" src={this.state.googlePicture} />
        </div> */}
      </FacebookWrapper>
    );
  }
}

export default SocialLogin;
