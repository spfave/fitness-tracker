const { Workout } = require('../models');

// Return list of workouts
async function getWorkouts(req, res) {
  try {
    const workouts = await Workout.find({}).exec();
    res.json(workouts);
  } catch (error) {
    res.json(error);
  }
  // res.json([]); // TESTING
}

// Return workouts in range
function getRangeWorkouts(req, res) {
  res.json([2, 3]);
}

// Add new workout
async function addWorkout(req, res) {
  try {
    const workout = await new Workout().save();
    res.json(workout);
  } catch (error) {
    res.json(error);
  }
}

// Add exercise to workout
function addWorkoutExercise(req, res) {
  res.json(1);
}

module.exports = {
  getWorkouts,
  getRangeWorkouts,
  addWorkout,
  addWorkoutExercise,
};
