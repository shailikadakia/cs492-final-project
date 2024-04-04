const express = require("express");
const cors = require("cors")
const startPageData = require("../data/startPage")
const gamePromptPage = require("../data/gamePromptPage")
const jobPostingData = require("../data/jobPostingRefsPage")
const screeningData = require("../data/screeningRefPage")
const interviewData = require("../data/interviewRefPage")
const postSelectionData = require("../data/postSelectionRefPage")
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/references/jobposting", (req, res) => {
  res.json(jobPostingData.data);
});

app.get("/api/references/screening", (req, res) => {
  res.json(screeningData.data);
});

app.get("/api/references/interview", (req, res) => {
  res.json(interviewData.data);
});

app.get("/api/references/postselection", (req, res) => {
  res.json(postSelectionData.data);
});

app.get("/api/start", (req, res) => {
  res.json(startPageData.data);
});

app.get("/api/game", (req, res) => {
  res.json(gamePromptPage.data);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});