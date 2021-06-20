const { Exercise, Workout } = require('../models');

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
function addWorkout(req, res) {
  res.json(2);
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
