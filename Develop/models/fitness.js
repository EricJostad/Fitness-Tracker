// Setting up required dependency 
const mongoose = require("mongoose");

// Creating schema variable and defining it to use mongoose
const Schema = mongoose.Schema;

// Creating new schema/model, fitnessSchema
const fitnessSchema = new Schema({
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
fitnessSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

// A variable that defines Fitness to the created fitnessSchema model
const Fitness = mongoose.model("Workout", fitnessSchema);

// Exports the Fitness schema/constructor 
module.exports = Fitness;