const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const port = 3000;

// const conectDB = require("../src/conect");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../view/index.html"));
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oip6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("😊 Connected to data base.");
    app.listen(port, () => {
      console.log("🚀 Server is running.");
    });
  })
  .catch((err) => {
    console(err);
  });

// app.listen(port, () => {
//   console.log("🚀 Server is running.");
// });
