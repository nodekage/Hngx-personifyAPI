const Person = require('../models/person')

async function createPerson(req, res) {
    const person = await Person.findOne({ name: req.body.name });

    if (person) {
      res.status(400).json({ error: "Name already exists in the database" });
    } else {
      try {
        const newPerson = new Person({
          name: req.body.name,
        });
        const savedPerson = await newPerson.save();
        res.status(200).json(savedPerson);
      } catch (err) {
        res.status(500).json(err);
      }
    }
    
}

module.exports = {
    createPerson
}