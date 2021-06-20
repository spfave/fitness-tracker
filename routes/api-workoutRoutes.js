const router = require('express').Router();
const { apiWorkoutController } = require('../controllers');

// GET all workouts
router.get('/', apiWorkoutController.getWorkouts);

// POST workout
router.post('/', apiWorkoutController.addWorkout);

// PUT exercise in workout
router.put('/:id', apiWorkoutController.addWorkoutExercise);

// Get workouts in range
router.get('/range', apiWorkoutController.getRangeWorkouts);

module.exports = router;
