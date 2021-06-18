const path = require('path');

// Return list of workouts
function getWorkouts(req, res) {
  res.json([0, 1, 2, 3, 4]);
}

// Add exercise to workout
function addWorkoutExercise(req, res) {
  res.json(1);
}

// Add new workout
function addWorkout(req, res) {
  res.json(2);
}

// Return workouts in range
function getRangeWorkouts(req, res) {
  res.json([2, 3]);
}

module.exports = {
  getWorkouts,
  addWorkoutExercise,
  addWorkout,
  getRangeWorkouts,
};
