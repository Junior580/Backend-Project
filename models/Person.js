const mongoose = require("mongoose");

const Person = mongoose.model("Person", {
  id: String,
  name: String,
  salary: Number,
  approved: Boolean,
});

module.exports = Person;
