let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer();
let cookieParser = require("cookie-parser");
app.use(cookieParser());
let reloadMagic = require("./reload-magic.js");
let passwords = {};
let sessions = {};
let messages = [];
reloadMagic(app);

app.use("/", express.static("build")); // Needed for the HTML and JS files
app.use("/static", express.static("public")); // Needed for local assets

// Your endpoints go after this line

// Your endpoints go before this line

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
