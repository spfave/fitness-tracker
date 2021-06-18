const router = require('express').Router();

const homeRoutes = require('./viewRoutes');
const workoutAPIRoutes = require('./api-workouts');

router.use('/', homeRoutes);
router.use('/api/workouts', workoutAPIRoutes);

module.exports = router;
