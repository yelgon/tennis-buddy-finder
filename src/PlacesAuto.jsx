import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

function PlacesAuto() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log(value);
    setAddress(value);
    setCoordinates(latLng);
  };
  const zoom = 10;
  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
            <p>Address: {address}</p>

            <input {...getInputProps({ placeholder: "Type address" })} />

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
            <div
              style={{
                height: "60vh",
                width: "100%"
              }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyBpxIhAuUfxs39WJO0sbSMJVU717st-z3o"
                }}
                defaultCenter={{
                  lat: 45.5017,
                  lng: -73.5673
                }}
                defaultZoom={zoom}
              >
                <AnyReactComponent
                  lat={coordinates.lat}
                  lng={coordinates.lng}
                  imgSource="tennis.png"
                />
              </GoogleMapReact>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

function AnyReactComponent({ imgSource }) {
  return (
    <div>
      <img height="30px" src={imgSource} />
      <div>YangohKim </div>
    </div>
  );
}

export default PlacesAuto;
