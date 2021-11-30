const app = require('express');
const {
  homeController,
  createPollController,
  pollListController,
} = require('../controller/routerController');
const router = app.Router();

router.route('/').get(homeController);
router.route('/create').get(createPollController);
router.route('/list').get(pollListController);

module.exports = router;
