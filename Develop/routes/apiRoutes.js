// Setting up required dependencies 
const express = require("express");
const router = require("express").Router();
const Workout = require("../models/fitness");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create({ day: new Date() })
        .then((data) => res.json(data))
});

router.get("/api/workouts", (req, res) => {
    try {
        const workout = await Workout.aggregate([
            { $addFields: { totalDuration: { $sum: "$exercises.duration" } } }
        ]);
        res.json(workout);
    } catch (err) {
        res.json(err);
    }
})

router.get("/api/workouts/range", (req, res) => {
    const range = await Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercises.duration' },
        }
    }]).limit(7);
    console.log(range);
    res.json(range);
})

router.put("/api/workouts/:id", (req, res) => {
    await Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true }
    ).then(workout => res.json(workout));
});

module.exports = router;