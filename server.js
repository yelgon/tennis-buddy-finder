let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer();
let cookieParser = require("cookie-parser");
app.use(cookieParser());
let reloadMagic = require("./reload-magic.js");
let MongoClient = require("mongodb").MongoClient;
let passwords = {};
let sessions = {};
let messages = [];
reloadMagic(app);

let dbo = undefined;
let url =
  "mongodb+srv://bob:bob123@cluster0-mijro.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true }).then(client => {
  dbo = client.db("tennis-buddy-finder");
});

app.use("/", express.static("build")); // Needed for the HTML and JS files
app.use("/static", express.static("public")); // Needed for local assets

// Your endpoints go after this line

app.post("/new-player", upload.none(), async (req, res) => {
  console.log("new-player", req.body);
  let playerName = req.body.playerName;
  let playerLevel = req.body.playerLevel;
  let playerEmail = req.body.playerEmail;
  let playerPhone = req.body.playerPhone;
  let address = req.body.address;
  let lat = req.body.lat;
  let lng = req.body.lng;

  try {
    const player = await dbo
      .collection("players")
      .findOne({ playerName: playerName });
    if (player) {
      return res.send(JSON.stringify({ success: false }));
    }
    await dbo.collection("players").insertOne({
      playerName: playerName,
      playerLevel: playerLevel,
      playerEmail: playerEmail,
      playerPhone: playerPhone,
      address: address,
      lat: lat,
      lng: lng
    });
    res.send(JSON.stringify({ success: true }));
  } catch (err) {
    console.log("/new-player", err);
    res.send(JSON.stringify({ success: false }));
  }
});

app.post("/new-court", upload.array("images"), async (req, res) => {
  console.log("new-court", req.body);
  let courtName = req.body.courtName;
  let courtType = req.body.courtType;
  let courtPhone = req.body.courtPhone;
  let openHour = req.body.openHour;
  let address = req.body.address;
  let lat = req.body.lat;
  let lng = req.body.lng;
  let img = req.files;
  console.log(img);

  try {
    const player = await dbo
      .collection("tennis-courts")
      .findOne({ courtName: courtName });
    if (player) {
      return res.send(JSON.stringify({ success: false }));
    }
    await dbo.collection("tennis-courts").insertOne({
      courtName: courtName,
      courtType: courtType,
      courtPhone: courtPhone,
      openHour: openHour,
      address: address,
      lat: lat,
      lng: lng
    });
    res.send(JSON.stringify({ success: true }));
  } catch (err) {
    console.log("/new-court", err);
    res.send(JSON.stringify({ success: false }));
  }
});

app.get("/all-players", (req, res) => {
  console.log("request to /all-players");
  dbo
    .collection("players")
    .find({})
    .toArray((err, ps) => {
      if (err) {
        console.log("error", err);
        res.send("fail");
        return;
      }
      console.log("all-players", ps);
      res.send(JSON.stringify(ps));
    });
});
app.get("/all-courts", (req, res) => {
  console.log("request to /all-courts");
  dbo
    .collection("tennis-courts")
    .find({})
    .toArray((err, ps) => {
      if (err) {
        console.log("error", err);
        res.send("fail");
        return;
      }
      console.log("all-courts", ps);
      res.send(JSON.stringify(ps));
    });
});
// Your endpoints go before this line

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
