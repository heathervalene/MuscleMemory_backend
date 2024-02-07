///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const MovementCtrl = require('../controllers/movements')

const FilterMovementsCtrl = require('../controllers/movements')

///////////////////////////////
// ROUTES
////////////////////////////////

router.get('/:muscleId/', MovementCtrl.movementIndex)

//filter route//

router.get('/:muscleId/filter', FilterMovementsCtrl.filterMovements)



module.exports = router
