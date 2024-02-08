const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MuscleGroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Chest', 'Back', 'Shoulders', 'Lats', 'Triceps', 'Biceps', 'Glutes', 'Hamstrings', 'Traps', 'Calves', 'Quads', 'Abs' ,'Other'],
    },
    image: String,
}, {
    timestamps: true,
});

const MuscleGroup = mongoose.model('MuscleGroup', MuscleGroupSchema);

module.exports = MuscleGroup;
