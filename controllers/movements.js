const Movement = require('../models/Movement');
const Muscle =  require('../models/MuscleGroup')


async function movementIndex(req, res, next) {
    try {
        const { muscleId } = req.params;
        const movements = await Movement.find({ muscleGroupId: muscleId });
        const muscle = await Muscle.findById(muscleId);
        res.status(200).json({ muscle, movements });
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}



module.exports = {
    movementIndex,

}