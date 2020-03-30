import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import { connect } from "react-redux";

const Social = styled.div`
  font-size: 20px;
  font-style: italic;
`;
const FacebookWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: end;
  button {
    height: 60px;
    font-size: 1.5rem;
    border-radius: 5px;
    width: fit-content;
  }
  div {
    margin: 10px;
    margin-left: 30px;
  }
`;

class UnconnectedSocialLogin extends Component {
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
    this.props.dispatch({
      type: "login-success",
      user: this.state.facebookUser
    });
  };
  responseGoogle = response => {
    console.log(response);
    this.setState({
      googleName: response.profileObj.name,
      googleEmail: response.profileObj.email,
      googlePicture: response.profileObj.imageUrl
    });
    this.props.dispatch({
      type: "login-success",
      user: this.state.googleName
    });
  };
  render() {
    return (
      <FacebookWrapper>
        <Social>or</Social>
        <div>
          {" "}
          <FacebookLogin
            appId="224984985202688"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook}
            textButton="facebook"
          />
        </div>
        <div>
          <GoogleLogin
            clientId="219077069962-h5o4uoad3nvg7ou2d5947pvpqi97kbue.apps.googleusercontent.com"
            buttonText=""
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </FacebookWrapper>
    );
  }
}

let SocialLogin = connect()(UnconnectedSocialLogin);

export default SocialLogin;
