const path = require("path");
const Person = require("../models/Person");
const { v4: uuidv4 } = require("uuid");
const res = require("express/lib/response");

module.exports = {
  home: (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../view/index.html"));
  },
  getPerson: async (req, res) => {
    try {
      const people = await Person.find();
      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  getPersonByID: async (req, res) => {
    const id = req.parms.id; ///ajustar o ID
    try {
      const person = await Person.findOne({ id: id });
      res.status(200).json(person);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  postPerson: async (req, res) => {
    const { name, salary, approved } = req.body;
    if (!name) {
      res.status(422).json({ msg: "O nome é obrigatório" });
    }
    if (!salary) {
      res.status(422).json({ msg: "O salario é obrigatório" });
    }
    if (!approved) {
      res.status(422).json({ msg: "O Status é obrigatório" });
    }
    const person = {
      id: uuidv4(),
      name,
      salary,
      approved,
    };
    try {
      await Person.create(person);
      res.status(201).json({ msg: "Pessoa inserida no sistema com sucesso." });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  },
};
