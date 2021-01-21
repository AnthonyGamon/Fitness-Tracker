const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
    exercise: [
        {
            type: {
                type: String, 
                trim: true,
                required: "Enter an exercise"
            },
            name: {
                type: String, 
                trim: true,
                required: "Enter an exercise name"
            },
            duration: {
                type: Number, 
                required: "Enter the time duration."
            },
            reps: {
                type: Number, 
            },
            weight: {
                type: Number, 
            },
            sets: {
                type: Number, 
            },
            distance: {
                type: Number, 
            },
        }
    ]
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;