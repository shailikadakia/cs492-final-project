const express = require("express");
const cors = require("cors")
const descriptionPageData = require("../data/descriptionPage")
const homePageData = require("../data/homePage")
const startPageData = require("../data/startPage")

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/description", (req, res) => {
  res.json(descriptionPageData.data);
});

app.get("/api/home", (req, res) => {
  res.json(homePageData.data);
});

app.get("/api/start", (req, res) => {
  res.json(startPageData.data);
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});