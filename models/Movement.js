const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovementSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: String,
    description: String,
    workoutType: {
        type: String,
        required: true,
        enum: ['bodyweight', 'dumbbell', 'machine'],
    },
    muscleGroupId: {
        type: Schema.Types.ObjectId,
        ref: 'MuscleGroup', 
        required: true,
    },
}, {
    timestamps: true,
});

const Workout = mongoose.model('Movement', MovementSchema);

module.exports = Workout;
