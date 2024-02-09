const Workouts = require('../models/Workout')
const Movement = require('../models/Movement');
const { move } = require('../routes/workouts');


async function getWorkouts(req, res, next) {
  try {
    // Fetch all workouts
    const workouts = await Workouts.find();

    // Map through each workout to fetch and attach the corresponding movement data
    const workoutsWithMovement = await Promise.all(workouts.map(async (workout) => {
      // Assuming each workout document contains a movementId that references a Movement
      const movement = await Movement.findById(workout.movementId);
      // Attach the movement data to the workout object
      // Note: Depending on your use case, you might want to adjust how the movement data is attached
      return {
        ...workout.toObject(), // Convert Mongoose document to plain object
        movement, // Add movement data
      };
    }));

    res.json(workoutsWithMovement);
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