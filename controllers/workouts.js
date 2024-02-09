const Workouts = require('../models/Workout')
const Movement = require('../models/Movement');
const { move } = require('../routes/workouts');


async function getWorkouts(req, res, next) {
    try {
        res.json(await Workouts.find())
    } catch (err) {
        res.status(400).json(err);
    }
}

async function createWorkout(req, res, next) {
    try {
        const workout = await Workouts.create(req.body)
        res.status(201).json(workout)
    } catch (err) {
        res.status(400).json(err);
    }}

async function showWorkout(req, res, next) {
    try {
        const showWorkout = await Workouts.findById(req.params.id)
        const movement = await Movement.findById(showWorkout.movementId )
        res.status(200).json({showWorkout,movement})
    } catch (err) {
        res.status(400).json(err);
    }
}

async function updateWorkout(req, res, next) {
    try {
      const updatedWorkout = await Workouts.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedWorkout);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async function destroyWorkout(req, res, next) {
    try {
      const deletedWorkout = await Workouts.findByIdAndDelete(req.params.id);
      res.json(deletedWorkout);
    } catch (err) {
      res.status(400).json(err);
    }
  }
module.exports = {
    getWorkouts,
    createWorkout,
    showWorkout,
    updateWorkout,
    delete: destroyWorkout
}