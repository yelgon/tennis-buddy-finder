import React, { useState } from "react";
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

function PostCourt() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [courtName, setCourtName] = useState("");
  const [courtType, setCourtType] = useState("");
  const [courtPhone, setCourtPhone] = useState("");
  const [openHour, setOpenHour] = useState("");
  const [images, setImages] = useState(""); //URL.createObjectURL()

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log(latLng); //latLng = {lat:45.520, lng:-73.661} (one object)
    console.log(courtName);
    setAddress(value);
    setCoordinates(latLng);
  };
  const imageHandler = event => {
    setImages(event.target.files);
    console.log(openHour);
  };
  const setPostCourt = () => {
    console.log(courtName, courtType, playerPhone, playerLevel);
    const data = new FormData();
    data.append("courtName", courtName);
    data.append("courtType", courtType);
    data.append("courtPhone", courtPhone);
    data.append("openHour", openHour);
    data.append("address", address);
    data.append("lat", coordinates.lat);
    data.append("lng", coordinates.lng);
    fetch("/new-player", { method: "POST", body: data });
    alert("Congratulations, You registered as a player");
    setCourtName("");
    setAddress("");
    setCourtType("");
    setCourtPhone("");
    setOpenHour("");
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
                textAlign: "center",
                marginTop: "10%",
                width: "100%"
              }}
            >
              <h2>Post Tennis Court</h2>
              <Button>
                <button onClick={setPostCourt}>POST COURT</button>
              </Button>

              <div>
                {" "}
                Court Name
                <input
                  type="text"
                  value={courtName}
                  onChange={e => setCourtName(e.target.value)}
                />
              </div>
              <div>
                {" "}
                Court Type
                <input
                  type="text"
                  value={courtType}
                  onChange={e => setCourtType(e.target.value)}
                />
              </div>
              <div>
                {" "}
                Phone
                <input
                  type="text"
                  value={courtPhone}
                  onChange={e => setCourtPhone(e.target.value)}
                />
              </div>
              <div>
                {" "}
                Open Hour
                <input
                  type="text"
                  value={openHour}
                  onChange={e => setOpenHour(e.target.value)}
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
              <input type="file" multiple onChange={imageHandler} />
            </div>
          </Wrapper>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default PostCourt;
