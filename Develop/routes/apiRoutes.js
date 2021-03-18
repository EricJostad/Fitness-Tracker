// Setting up required dependencies 
const express = require("express");
const router = require("express").Router();
const Fitness = require("../models/fitness");

module.exports = (app) => {
    app.post("/api/workouts", ({ body }, res) => {
        Workout.create({ day: new Date() })
            .then((data) => res.json(data))
    });

    app.get("/api/workouts", (req, res) => {
        Workout.find({}, (error, data) => {
            if (error) {
                res.send(error);
            } else {
                console.log(data)
                res.json(data);
            }
        });
    })

    app.get("/api/workouts/range", (req, res) => {
        Workout.find().limit(7)
            .then(workout => res.json(workout))
            console.log(req.body)
    })

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body)
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
            .then(() => res.sendStatus(200))
    });
}