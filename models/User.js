const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        passwordDigest: { type: String, required: true },
        movementId: {
            type: Schema.Types.ObjectId,
            ref: 'Movement',
        },
        workoutId: {
            type: Schema.Types.ObjectId,
            ref: 'Workout',
        },
    },
    { timestamps: true } 
);

const User = mongoose.model('User', userSchema);

module.exports = User