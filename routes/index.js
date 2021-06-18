const router = require('express').Router();

const homeRoutes = require('./viewRoutes');
const apiWorkoutRoutes = require('./api-workoutRoutes');

router.use('/', homeRoutes);
router.use('/api/workouts', apiWorkoutRoutes);

module.exports = router;
