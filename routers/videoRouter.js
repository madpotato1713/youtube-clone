import express from "express";
import {
  detailVideo,
  editVideo,
  upload,
  videoDetail,
} from "../controller/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.detailVideo, detailVideo);

export default videoRouter;
