import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my home");

const handleProfile = (req, res) => res.send("Your are on my profile");

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(4000, handleListening);

// // respond with "hello world" when a GET request is made to the homepage
// app.get("/", function (req, res) {
//   res.send("hello world");
// });
