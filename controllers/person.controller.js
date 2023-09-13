const Person = require('../models/person');

async function createPerson(req, res) {
  try {
    const existingPerson = await Person.findOne({ name: req.body.name });

    if (existingPerson) {
      return res.status(400).json({ error: "Name already exists in the database" });
    }

    const newPerson = new Person({
      name: req.body.name,
    });

    const savedPerson = await newPerson.save();
    return res.status(200).json(savedPerson);
  } catch (error) {
    console.error("Create Person Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getPersonByID(req, res) {
  try {
    const person = await Person.findById(req.params.id);

    if (!person) {
      return res.status(404).json({ error: "Person not Found" });
    }

    return res.status(200).json(person);
  } catch (error) {
    console.error("Get Person by ID Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updatePersonByID(req, res) {
  try {
    const person = await Person.findById(req.params.id);

    if (!person) {
      return res.status(401).json({ error: "Person not Found" });
    }

    const updatedPerson = await Person.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

    return res.status(200).json(updatedPerson);
  } catch (error) {
    console.error("Update Person by ID Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deletePersonByID(req, res) {
  try {
    const person = await Person.findById(req.params.id);

    if (!person) {
      return res.status(401).json({ error: "Person not Found" });
    }

    await Person.deleteOne({ _id: req.params.id });
    return res.status(200).json("Person has been deleted...");
  } catch (error) {
    console.error("Delete Person by ID Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createPerson,
  getPersonByID,
  updatePersonByID,
  deletePersonByID,
};
