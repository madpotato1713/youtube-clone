import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import globalRouter from "./routers/globalRouter";
import helmet from "helmet";
import { localsMiddleware } from "./middlewares";
import morgan from "morgan";
import routes from "./routes";
/* Routers*/
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
// import { userRouter } from "./route";

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

//use : middleware
app.use(helmet()); //helmet: Helmet helps you secure your Express apps by setting various HTTP headers.
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); //morgan: HTTP request logger middleware for node.js
app.use(localsMiddleware);

// app.get("/", handleHome);
// app.get("/profile", handleProfile);
// app.use("/user", userRouter);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// app.listen(PORT, handleListening);

export default app;
