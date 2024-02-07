///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const WorkoutCtrl = require('../controllers/workouts')


///////////////////////////////
// ROUTES
////////////////////////////////

router.get('/', WorkoutCtrl.getWorkouts)

router.get('/:id', WorkoutCtrl.showWorkout)

router.post('/', WorkoutCtrl.createWorkout)

router.put('/:id', WorkoutCtrl.updateWorkout)

router.delete('/:id', WorkoutCtrl.delete)

module.exports = router