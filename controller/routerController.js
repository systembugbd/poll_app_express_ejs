const Poll = require('../model/Poll.Schema');

const homeController = (req, res) => {
  res.render('home');
};
const createGetPollController = (req, res) => {
  res.render('create');
};

const createPostPollController = async (req, res) => {
  let { title, description, options } = req.body;

  options = options.map((option) => {
    if (option !== null || option !== undefined) {
      return {
        name: option,
      };
    }
  });

  console.log(options);

  let poll = new Poll({
    title,
    description,
    options,
  });

  try {
    await poll.save();
    res.redirect('/list');
  } catch (error) {
    console.log(error);
  }
};
const pollListController = async (req, res) => {
  try {
    let polls = await Poll.find();
    console.log(polls);
    res.render('polls', { polls });
  } catch (error) {
    console.log(error);
  }
};

const getSinglePollController = async (req, res) => {
  let id = req.params.pollId;
  let poll = await Poll.findById(id);
  res.render('singlepoll', { poll });
};
module.exports = {
  homeController,
  createGetPollController,
  createPostPollController,
  pollListController,
  getSinglePollController,
};
