///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const MovementCtrl = require('../controllers/movements')

///////////////////////////////
// ROUTES
////////////////////////////////

router.get('/:muscleId/', MovementCtrl.MovementIndex)

//filter route//



module.exports = router
