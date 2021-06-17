const router = require('express').Router();
// const path = require('path');

const { viewController } = require('../controllers');

router.get('/', viewController.viewHomePage);

router.get('/exercise', viewController.viewExercisePage);

router.get('/stats', viewController.viewStatsPage);

module.exports = router;
