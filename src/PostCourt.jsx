import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  background-image: ${props =>
    props.themeToggle
      ? `url("static/tennisBall3.png")`
      : `url("static/tennisBall2.png")`};
  color: ${props => (props.themeToggle ? "#f07810" : "black")};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  left: 50%;
  top: 50%;
  transform: translate(-25%, -29%);
`;
const Button = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translate(-30%, -25%);
  button {
    width: 230px;
    height: 65px;
    border-radius: 50%;
    border: none;
    font-size: 30px;
    font-style: bold;
    :hover {
      cursor: pointer;
      background-color: ${props => (props.themeToggle ? "#FD7013" : "#393E46")};
    }
  }
`;
const ItemMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin: 5px;
  font-size: 20px;
  max-width: 420px;
  margin-top: 30px;
  input {
    height: 20px;
    width: 200px;
    padding: 5px;
  }
`;
const PageName = styled.div`
  position: absolute;
  font-size: 35px;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
`;
const ImageUploadPreview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 5px;
  justify-items: center;
  margin-left: 30px;
`;
function PostCourt() {
  const themeToggle = useSelector(state => state.toggle);
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [courtName, setCourtName] = useState("");
  const [courtType, setCourtType] = useState("");
  const [courtPhone, setCourtPhone] = useState("");
  const [openHour, setOpenHour] = useState("");
  const [images, setImages] = useState("");
  const [previewImg, setPreviewImg] = useState([]); //URL.createObjectURL()

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log(latLng); //latLng = {lat:45.520, lng:-73.661} (one object)
    console.log(courtName);
    setAddress(value);
    setCoordinates(latLng);
  };
  const imagePreview = files => {
    const urlArray = Array.from(files).map(file => {
      return URL.createObjectURL(file);
    });
    setPreviewImg(urlArray);
  };
  const imageHandler = event => {
    setImages(event.target.files);
    imagePreview(event.target.files);
    console.log(images);
    // setPreviewImg() //URL.createObjectURL()
  };
  const setPostCourt = () => {
    console.log(courtName, courtType, courtPhone, openHour);
    const data = new FormData();
    Array.from(images).forEach(img => {
      data.append("images", img);
    });
    data.append("courtName", courtName);
    data.append("courtType", courtType);
    data.append("courtPhone", courtPhone);
    data.append("openHour", openHour);
    data.append("address", address);
    data.append("lat", coordinates.lat);
    data.append("lng", coordinates.lng);
    fetch("/new-court", { method: "POST", body: data });
    alert("Court uploaded");
    setCourtName("");
    setAddress("");
    setCourtType("");
    setCourtPhone("");
    setOpenHour("");
    setPreviewImg([]);
  };
  return (
    <Container themeToggle={themeToggle}>
      <PageName>
        <h2>Post Tennis Court</h2>
      </PageName>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <Wrapper>
            <div>
              <ItemMenu>
                <div>Court Name</div>
                <div>
                  <input
                    type="text"
                    value={courtName}
                    onChange={e => setCourtName(e.target.value)}
                  />
                </div>
              </ItemMenu>
              <ItemMenu>
                <div> Court Type</div>
                <div>
                  <input
                    type="text"
                    value={courtType}
                    onChange={e => setCourtType(e.target.value)}
                  />
                </div>
              </ItemMenu>
              <ItemMenu>
                <div> Phone</div>
                <div>
                  <input
                    type="text"
                    value={courtPhone}
                    onChange={e => setCourtPhone(e.target.value)}
                  />
                </div>
              </ItemMenu>
              <ItemMenu>
                <div>Open Hour</div>
                <div>
                  <input
                    type="text"
                    value={openHour}
                    onChange={e => setOpenHour(e.target.value)}
                  />
                </div>
              </ItemMenu>
              <ItemMenu>Address </ItemMenu>
              <div style={{ padding: "20px" }}> {address}</div>

              <input
                style={{ width: "400px", padding: "10px", margin: "10px" }}
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
            <div>
              <input
                type="file"
                multiple
                onChange={imageHandler}
                style={{ margin: "30px" }}
              />
              <ImageUploadPreview>
                {previewImg.map((e, idx) => {
                  return <img height="175px" width="175px" src={e} key={idx} />;
                })}
              </ImageUploadPreview>
            </div>
          </Wrapper>
        )}
      </PlacesAutocomplete>
      <Button themeToggle={themeToggle}>
        <button onClick={setPostCourt}>POST</button>
      </Button>
    </Container>
  );
}

export default PostCourt;
