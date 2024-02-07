const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({ 
   name : {
    type: String,
        required: true,
   },
    muscleGroupId: {
        type: Schema.Types.ObjectId,
        ref: 'MuscleGroup',
        required: true,
    },
    sets: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;