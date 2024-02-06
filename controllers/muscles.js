
const MuscleGroup = require('../models/MuscleGroup');


async function getMuscleGroups(req,res,next) {
    try {
        res.json(await MuscleGroup.find())
    } catch (err) {
        res.status(400).json(err);
    }
}


module.exports = {
    getMuscleGroups,
    
}