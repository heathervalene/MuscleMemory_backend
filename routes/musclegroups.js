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



module.exports = router