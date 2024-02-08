///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const WorkoutCtrl = require('../controllers/workouts')
const middleware = require('../middleware/index')


///////////////////////////////
// ROUTES
////////////////////////////////

router.get('/', middleware.stripToken,
middleware.verifyToken, WorkoutCtrl.getWorkouts)

router.get('/:id', middleware.stripToken,
middleware.verifyToken, WorkoutCtrl.showWorkout)

router.post('/', middleware.stripToken,
middleware.verifyToken, WorkoutCtrl.createWorkout)

router.put('/:id', middleware.stripToken,
middleware.verifyToken, WorkoutCtrl.updateWorkout)

router.delete('/:id', middleware.stripToken,
middleware.verifyToken,
WorkoutCtrl.delete)

module.exports = router