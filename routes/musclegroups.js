///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const MuscleGroupCtrl = require('../controllers/muscles')

///////////////////////////////
// ROUTES
////////////////////////////////

router.get('/', MuscleGroupCtrl.getMuscleGroups)

//route not needed- only for testing in DB
//router.post('/', MuscleGroupCtrl.createMuscleGroup)

module.exports = router