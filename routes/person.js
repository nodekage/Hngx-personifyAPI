const router = require('express').Router()
const personController = require('../controllers/person.controller')


// CREATE PERSON
router.post('/', personController.createPerson)


// GET PERSON BY ID
router.get('/:id', personController.getPersonByID)


// UPDATE PEROSN BY ID
router.put('/:id', personController.updatePersonByID)


// DELETE PERSON BY ID
router.delete('/:id', personController.deletePersonByID)



module.exports = router