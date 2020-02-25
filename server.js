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
  "mongodb+srv://bob:bobsue@cluster0-mijro.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
  dbo = db.db("tennis-buddy-finder");
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
    console.log("/signup", err);
    res.send(JSON.stringify({ success: false }));
  }
});

// Your endpoints go before this line

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
