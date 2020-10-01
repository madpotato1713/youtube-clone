import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
/* Routers*/
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
// import { userRouter } from "./route";
import routes from "./routes";

const app = express();

// const PORT = 4000;

// const handleListening = () =>
//   console.log(`Listening on: http://localhost:${PORT}`);

// const betweenHome = (req, res, next) => {
//   console.log("between");
//   next();
// };

// app.use(betweenHome);

// const handleHome = (req, res) => res.send("Hello from my home");

// const handleProfile = (req, res) => res.send("Your are on my profile");

app.set("view engine", "pug");

//use : middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); //helmet: Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(morgan("dev")); //morgan: HTTP request logger middleware for node.js

// app.get("/", handleHome);

// app.get("/profile", handleProfile);

// app.use("/user", userRouter);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// app.listen(PORT, handleListening);

export default app;
