///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const MovementCtrl = require('../controllers/movements')



///////////////////////////////
// ROUTES
////////////////////////////////

router.get('/:muscleId/', MovementCtrl.movementIndex)



module.exports = router
