import React, { Component, useState } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121"
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c"
      }
    ]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d"
      }
    ]
  }
];

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
  padding: 3px;
  border-radius: 5px;
`;
const CourtMarkerPopup = styled.div`
  div {
    padding-top: 2px;
    padding-bottom: 2px;
    text-align: left;
  }
  opacity: 0;
  background: #ff82a9;
  width: fit-content;
  border: 1px solid black;
  padding: 3px;
  border-radius: 5px;
`;
const Marker = styled.div`
  &:hover > ${MarkerPopup} {
    opacity: 1;
  }
`;
const CourtMarker = styled.div`
  &:hover > ${CourtMarkerPopup} {
    opacity: 1;
  }
`;
const TennisCourt = ({ imgSource, name, phone, open, type }) => {
  const [showing, setShowing] = useState(false);
  const handleClick = () => {
    setShowing(!showing);
  };
  return (
    <CourtMarker onClick={handleClick}>
      <img height="30px" src={imgSource} />
      <CourtMarkerPopup>
        <div>{name} </div>
        <div>{phone}</div>
        {showing && (
          <div>
            <div>{type}</div>
            <div>{open}</div>
            <div style={{ width: "100px" }}>
              <Link to={"/detail/" + name}>click to detail</Link>
            </div>
          </div>
        )}
      </CourtMarkerPopup>
    </CourtMarker>
  );
};

function AnyReactComponent({ imgSource, name, level, cell, email }) {
  const [showing, setShowing] = useState(false);
  const handleClick = () => {
    setShowing(!showing);
  };
  return (
    <Marker onClick={handleClick}>
      <img height="30px" src={imgSource} />
      <MarkerPopup>
        <div>{name} </div>
        <div>Level:{level}</div>
        {showing && (
          <div>
            <div>cell:{cell}</div>
            <div>{email}</div>
          </div>
        )}
      </MarkerPopup>
    </Marker>
  );
}

class UnconnectedSimpleMap extends Component {
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
          options={{ styles: mapStyle }}
        >
          {this.props.stores.map((player, idx) => (
            <AnyReactComponent
              key={idx}
              lat={parseFloat(player.lat)}
              lng={parseFloat(player.lng)}
              imgSource="/static/tennis-player.png"
              name={player.playerName}
              level={player.playerLevel}
              cell={player.playerPhone}
              email={player.playerEmail}
            />
          ))}
          {this.props.tennisCourt.map((court, idx) => {
            return (
              <TennisCourt
                key={idx}
                lat={parseFloat(court.lat)}
                lng={parseFloat(court.lng)}
                imgSource="/static/court.jpg"
                name={court.courtName}
                phone={court.courtPhone}
                type={court.courtType}
                open={court.openHour}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}
let mapStateToProps = st => {
  return { stores: st.players, tennisCourt: st.tennisCourts };
};
let SimpleMap = connect(mapStateToProps)(UnconnectedSimpleMap);

export default SimpleMap;
