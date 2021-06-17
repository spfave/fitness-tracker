const router = require('express').Router();
const { viewController } = require('../controllers');

// Homepage
router.get('/', viewController.viewHomePage);

// Exercise page
router.get('/exercise', viewController.viewExercisePage);

// Stats page
router.get('/stats', viewController.viewStatsPage);

module.exports = router;
