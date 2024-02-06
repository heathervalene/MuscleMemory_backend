const Workouts = require('../models/Workout')


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
        res.json(await Workouts.findById(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
}

async function updateWorkout(req, res, next) {
    try {
        res.json(findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (err) {
        res.status(400).json(err);
    }
}

async function destroyWorkout(req, res, next) {
    try {
        res.json(await Workouts.findByIdAndDelete(req.params.id))
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