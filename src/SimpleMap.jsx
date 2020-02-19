import React, { Component, useState } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const MarkerPopup = styled.div`
  opacity: 0;
  background: white;
  border: 1px solid red;
  width: fit-content;
  border: 1px solid black;
  padding: 5px;
  border-radius: 10%;
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
      <MarkerPopup>
        <div>hello hello hello</div>
        {showing && <div>yelgon36@gmail.com</div>}
      </MarkerPopup>

      <img height="30px" src={imgSource} />
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
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
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
              imgSource="tennis-player.png"
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
