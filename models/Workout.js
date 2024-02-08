const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({ 
   name : {
    type: String,
        
   },
    movementId: {
        type: Schema.Types.ObjectId,
        ref: 'Movement',
        
    },
    sets: {
        type: Number,
        
    },
    reps: {
        type: Number,
        
    },
    weight: {
        type: Number,
        
    },
    notes: String,
    date: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;