const Movement = require('../models/Movement');


async function MovementIndex(req, res, next) {
    try {
        const { muscleId } = req.params;
        const movements = await Movement.find({ muscleGroupId: muscleId });

        console.log('Muscle ID:', muscleId);
        console.log('Movements:', movements);

        res.status(200).json({ movements, muscleId });
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

module.exports = {
    MovementIndex,
}