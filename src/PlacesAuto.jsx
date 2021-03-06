import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import styled from "styled-components";
import { useSelector } from "react-redux";
import mapSilver from "./mapSilver.js";

const Address = styled.div`
  max-width: 300px;
  margin: 5px;
`;
const InputMenu = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas:
    "menu input"
    "menu input"
    "menu input"
    "menu input"
    "menu ."
    "menu .";
  div {
    margin: 5px;
  }
  input {
    width: 100%;
  }
`;
let mapStyleToggle = undefined;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.themeToggle ? "#1c1e24" : "white")};
  color: ${(props) => (props.themeToggle ? "white" : "#1c1e24")};
  font-size: 17px;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
`;
const Button = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-30%, -25%);
  button {
    width: 200px;
    height: 40px;
    border-radius: 15px;
    border: none;
    font-size: 25px;
    font-style: bold;
    :hover {
      cursor: pointer;
      background-color: ${(props) =>
        props.themeToggle ? "#FD7013" : "#393E46"};
    }
  }
`;

function PlacesAuto() {
  const themeToggle = useSelector((state) => state.toggle);
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [playerName, setPlayerName] = useState("");
  const [playerEmail, setPlayerEmail] = useState("");
  const [playerPhone, setPlayerPhone] = useState("");
  const [playerLevel, setPlayerLevel] = useState("");
  if (themeToggle) {
    mapStyleToggle = mapSilver;
  } else {
    mapStyleToggle = undefined;
  }
  const handleSelect = async (value) => {
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
    <Box themeToggle={themeToggle}>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <Wrapper>
            <div
              style={{
                height: "65vh",
                width: "60%",
                marginTop: "10%",
                marginLeft: "5%",
              }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyBpxIhAuUfxs39WJO0sbSMJVU717st-z3o",
                }}
                defaultCenter={{
                  lat: 45.54017,
                  lng: -73.6873,
                }}
                defaultZoom={zoom}
                options={{ styles: mapStyleToggle }}
              >
                <AnyReactComponent
                  lat={coordinates.lat}
                  lng={coordinates.lng}
                  imgSource="./static/tennis.png"
                />
              </GoogleMapReact>
            </div>
            <div
              style={{
                marginLeft: "5%",
                marginRight: "10px",
                marginTop: "10%",
              }}
            >
              <h2>Post as a player</h2>
              <Button>
                <button onClick={setPostPlayer}>POST</button>
              </Button>
              <InputMenu>
                <div>Name</div>
                <div>
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                  />
                </div>
                <div> Email</div>
                <div>
                  <input
                    type="text"
                    value={playerEmail}
                    onChange={(e) => setPlayerEmail(e.target.value)}
                  />
                </div>

                <div>Phone</div>
                <div>
                  <input
                    type="text"
                    value={playerPhone}
                    onChange={(e) => setPlayerPhone(e.target.value)}
                  />
                </div>
                <div>Level</div>
                <div>
                  <input
                    type="text"
                    value={playerLevel}
                    onChange={(e) => setPlayerLevel(e.target.value)}
                  />
                </div>
              </InputMenu>
              <Address>
                <div>Address</div>
                <div
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  {address}
                </div>

                <div>
                  <input
                    style={{
                      width: "300px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                    {...getInputProps({ placeholder: "Type address" })}
                  />
                </div>

                <div>
                  {loading ? <div>...loading</div> : null}

                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#F9CE00" : "#fff",
                      color: "black",
                      maxWidth: "300px",
                      padding: "5px",
                    };

                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </Address>
            </div>
          </Wrapper>
        )}
      </PlacesAutocomplete>
    </Box>
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
