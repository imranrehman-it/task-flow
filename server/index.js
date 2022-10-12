const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://imran:Lolpops-123@cluster0.lcms3.mongodb.net/mern-tutorial?retryWrites=true&w=majority"
);
