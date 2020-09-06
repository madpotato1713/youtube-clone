const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  //   console.log(req);
  res.send("Hello from home");
}

function handleProfile(req, res) {
  res.send("Your are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(4000, handleListening);

// // respond with "hello world" when a GET request is made to the homepage
// app.get("/", function (req, res) {
//   res.send("hello world");
// });
