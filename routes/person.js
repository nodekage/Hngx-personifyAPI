const router = require('express').Router()
const personController = require('../controllers/person.controller')


// CREATE PERSON
router.post('/create', personController.createPerson)


module.exports = router