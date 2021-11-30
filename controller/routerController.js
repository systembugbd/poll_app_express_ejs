const homeController = (req, res) => {
  res.render('home');
};
const createPollController = (req, res) => {
  res.render('create');
};

const pollListController = (req, res) => {
  res.render('polllist');
};

module.exports = {
  homeController,
  createPollController,
  pollListController,
};
