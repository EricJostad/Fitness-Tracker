// Setting up required dependency 
const mongoose = require("mongoose");

// Creating schema variable and defining it to use mongoose
const Schema = mongoose.Schema;

// Creating new schema/model, WorkoutSchema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String
            },
            type: {
                type: String
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
});

// This is a function that returns the total, combined duration of excercise over the last seven days
WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

// A variable that defines Fitness to the created fitnessSchema model
const Workout = mongoose.model("Workout", WorkSchema);

// Exports the Fitness schema/constructor 
module.exports = Workout;