import React, { Component, useState } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const MarkerPopup = styled.div`
  div {
    padding-top: 2px;
    padding-bottom: 2px;
    text-align: left;
  }
  opacity: 0;
  background: rgb(203, 250, 127);
  width: fit-content;
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;
`;

const Marker = styled.div`
  &:hover > ${MarkerPopup} {
    opacity: 1;
  }
`;

function AnyReactComponent({ imgSource }) {
  const [showing, setShowing] = useState(false);
  const handleClick = () => {
    setShowing(!showing);
  };
  return (
    <Marker onClick={handleClick}>
      <img height="30px" src={imgSource} />
      <MarkerPopup>
        <div>YangohKim </div>
        <div>Level:4.0</div>
        {showing && (
          <div>
            <div>cell:438-926-2922</div>
            <div>yelgon36@gmail.com</div>
          </div>
        )}
      </MarkerPopup>
    </Marker>
  );
}

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        { latitude: 45.5017, longitude: -73.5673 },
        { latitude: 45.5017, longitude: -73.6673 },
        { latitude: 45.5017, longitude: -73.7673 },
        { latitude: 45.5017, longitude: -73.8673 },
        { latitude: 45.5017, longitude: -73.9673 },
        { latitude: 45.5017, longitude: -74.0 }
      ]
    };
  }
  static defaultProps = {
    center: {
      lat: 45.5017,
      lng: -73.5673
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "100vh",
          width: "100%",
          textAlign: "center"
        }}
      >
        <input
          type="text"
          placeholder="Search"
          style={{
            position: "absolute",
            zIndex: "100",
            padding: "3px",
            width: "40%",
            height: "20px",
            margin: "10px"
          }}
        />
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBpxIhAuUfxs39WJO0sbSMJVU717st-z3o" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.stores.map((store, idx) => (
            <AnyReactComponent
              key={idx}
              lat={store.latitude}
              lng={store.longitude}
              imgSource="./static/tennis-player.png"
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
