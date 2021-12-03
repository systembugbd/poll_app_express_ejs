const app = require('express');
const {
  homeController,
  createGetPollController,
  createPostPollController,
  pollListController,
  getSinglePollController,
  getSinglePollByIdAndPostController,
  getSinglePollByIdAndGetController,
} = require('../controller/routerController');
const router = app.Router();

router.route('/').get(homeController);
router
  .route('/create')
  .get(createGetPollController)
  .post(createPostPollController);
router.route('/list').get(pollListController);
router.route('/list/:pollId').get(getSinglePollController);
router
  .route('/polls/:pollId')
  .post(getSinglePollByIdAndPostController)
  .get(getSinglePollByIdAndGetController);

module.exports = router;
