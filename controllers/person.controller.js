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

async function GetPersonByID(req, res) {
    try {
        const person = await Person.findById(req.params.id)
        if (person) {
            res.status(200).json(person)
        }else {
            res.status(404).json("Person not Found")
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updatePersonByID(req, res) {
    try {
        const person = await Person.findById(req.params.id)
        if (person) {
            try {
                const updatedPerson = await Person.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },{new: true}
                )
                res.status(200).json(updatedPerson)
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("Person not Found!")
        }
    } catch (err) {}
}


async function deletePersonByID(req, res) {
    try {
        const person = await Person.findById(req.params.id);
      
        if (person) {
          try {
            await Person.deleteOne({ _id: req.params.id }); // Use deleteOne to delete the document
            res.status(200).json("Person has been deleted...");
          } catch (err) {
            console.error('Delete Error:', err);
            res.status(500).json(err.message || 'Internal Server Error');
          }
        } else {
          res.status(401).json("Person not Found!");
        }
      } catch (err) {
        console.error('Find Error:', err);
        res.status(500).json(err.message || 'Internal Server Error');
      }
      
      
}



module.exports = {
    createPerson,
    GetPersonByID,
    updatePersonByID,
    deletePersonByID
}