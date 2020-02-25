import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
`;
const Button = styled.div`
  position: absolute;
  left: 50%;
  bottom: 25%;
  transform: translate(-50%, -50%);
`;

function PlacesAuto() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [playerName, setPlayerName] = useState("");
  const [playerEmail, setPlayerEmail] = useState("");
  const [playerPhone, setPlayerPhone] = useState("");
  const [playerLevel, setPlayerLevel] = useState("");

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log(latLng); //latLng = {lat:45.520, lng:-73.661} (one object)
    console.log(playerName);
    setAddress(value);
    setCoordinates(latLng);
  };
  const setPostPlayer = () => {
    console.log(playerName, playerEmail, playerPhone, playerLevel);
    const data = new FormData();
    data.append("playerName", playerName);
    data.append("playerLevel", playerLevel);
    data.append("playerEmail", playerEmail);
    data.append("playerPhone", playerPhone);
    data.append("address", address);
    data.append("lat", coordinates.lat);
    data.append("lng", coordinates.lng);
    fetch("/new-player", { method: "POST", body: data });
    alert("Congratulations, You registered as a player");
    setPlayerName("");
    setAddress("");
    setPlayerEmail("");
    setPlayerPhone("");
    setPlayerLevel("");
  };
  const zoom = 10;
  return (
    <div style={{}}>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <Wrapper>
            <div
              style={{
                marginLeft: "5%",
                marginRight: "10px",
                marginTop: "10%"
              }}
            >
              <h2>Post as a player</h2>
              <Button>
                <button onClick={setPostPlayer}>POST</button>
              </Button>

              <div>
                {" "}
                Name
                <input
                  type="text"
                  value={playerName}
                  onChange={e => setPlayerName(e.target.value)}
                />
              </div>
              <div>
                {" "}
                Email
                <input
                  type="text"
                  value={playerEmail}
                  onChange={e => setPlayerEmail(e.target.value)}
                />
              </div>
              <div>
                {" "}
                Phone
                <input
                  type="text"
                  value={playerPhone}
                  onChange={e => setPlayerPhone(e.target.value)}
                />
              </div>
              <div>
                {" "}
                Level
                <input
                  type="text"
                  value={playerLevel}
                  onChange={e => setPlayerLevel(e.target.value)}
                />
              </div>
              <div>Address: {address}</div>

              <input
                style={{ width: "300px" }}
                {...getInputProps({ placeholder: "Type address" })}
              />
              <div>
                {loading ? <div>...loading</div> : null}

                {suggestions.map(suggestion => {
                  const style = {
                    backgroundColor: suggestion.active ? "#F9CE00" : "#fff"
                  };

                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                height: "50vh",
                width: "60%",
                marginTop: "10%"
              }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyBpxIhAuUfxs39WJO0sbSMJVU717st-z3o"
                }}
                defaultCenter={{
                  lat: 45.54017,
                  lng: -73.6873
                }}
                defaultZoom={zoom}
              >
                <AnyReactComponent
                  lat={coordinates.lat}
                  lng={coordinates.lng}
                  imgSource="./static/tennis.png"
                />
              </GoogleMapReact>
            </div>
          </Wrapper>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

function AnyReactComponent({ imgSource }) {
  return (
    <div>
      <img height="30px" src={imgSource} />
    </div>
  );
}

export default PlacesAuto;
