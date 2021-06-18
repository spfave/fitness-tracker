const router = require('express').Router();
const { apiWorkoutController } = require('../controllers');

// GET all workouts
router.get('/', apiWorkoutController.getWorkouts);

// PUT exercise in workout
router.put('/', apiWorkoutController.addWorkoutExercise);

// POST workout
router.post('/', apiWorkoutController.addWorkout);

// Get workouts in range
router.get('/range', apiWorkoutController.getRangeWorkouts);

module.exports = router;
