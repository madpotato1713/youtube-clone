import { videos } from "../db";

// export const home = (req, res) => res.send("HOME");
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "VideoDetail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "EditVideo" });

export const detailVideo = (req, res) =>
  res.render("detailVideo", { pageTitle: "DetailVideo" });
