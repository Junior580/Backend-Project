const mongoose = require("mongoose");

const conectDB = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oip6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(error);
      }
      return console.log("😊 Connected to data base");
    }
  );
};

module.exports = conectDB;
