///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const WorkoutCtrl = require('../controllers/workouts')
const Workout = require('../models/Workout')

///////////////////////////////
// ROUTES
////////////////////////////////

router.get('/', WorkoutCtrl.getWorkouts)

router.post('/', WorkoutCtrl.createWorkout)

router.put('/:id', WorkoutCtrl.updateWorkout)

router.delete('/:id', WorkoutCtrl.delete)

module.exports = router