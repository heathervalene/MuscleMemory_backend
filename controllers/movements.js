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


async function filterMovements(req, res, next) {
    try {
        const { muscleId } = req.params;
        const { type } = req.query;

        let filter = { muscleGroupId: muscleId };
        if (type) {
            filter.workoutType = type;
        }

        const filteredMovements = await Movement.find(filter);

        console.log('Muscle ID:', muscleId);
        console.log('Filtered Movements:', filteredMovements);

        res.status(200).json({ movements: filteredMovements, muscleId });
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}


module.exports = {
    movementIndex,
    filterMovements,
}