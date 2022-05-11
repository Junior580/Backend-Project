const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectToDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oip6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("😊 Connected to data base.");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectToDB;
