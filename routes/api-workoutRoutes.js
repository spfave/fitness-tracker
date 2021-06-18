const router = require('express').Router();
const { apiWorkoutController } = require('../controllers');

// GET last workout
router.get('/', 1);

// PUT workout
router.put('/', 2);

// POST workout
router.post('/', 3);

// Get workouts in range
router.get('/range', 4);

module.exports = router;
