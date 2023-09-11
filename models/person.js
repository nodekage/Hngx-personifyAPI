const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const personSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
        auto: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
