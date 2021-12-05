const Poll = require("../model/Poll.Schema");

const homeController = (req, res) => {
  res.render("index");
};
const createGetPollController = (req, res) => {
  res.render("create");
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

  let poll = new Poll({
    title,
    description,
    options,
  });

  try {
    await poll.save();
    res.redirect("/list");
  } catch (error) {
    console.log(error);
  }
};
const pollListController = async (req, res) => {
  try {
    let polls = await Poll.find();

    res.render("polls", { polls });
  } catch (error) {
    console.log(error);
  }
};

const getSinglePollController = async (req, res) => {
  let id = req.params.pollId;
  let poll = await Poll.findById(id);
  res.render("singlepoll", { poll });
};

const getSinglePollByIdAndPostController = async (req, res) => {
  try {
    let pollId = req.params.pollId;

    let poll = await Poll.findById(pollId);
    let optionId = req.body.option;
    let options = [...poll.options];
    let index = options.findIndex((opt) => opt.id === optionId);

    options[index].vote = options[index].vote + 1;
    let totalVote = poll.totalVote + 1;

    await Poll.findOneAndUpdate(
      { _id: pollId },
      { $set: { options, totalVote } }
    );

    res.redirect("/list/" + pollId);
  } catch (error) {
    console.log(error);
  }
};

const getSinglePollByIdAndGetController = async (req, res) => {
  try {
    let id = req.params.pollId;
    let poll = await Poll.findById(id);
    let options = [...poll.options];
    let results = [];
    options.forEach((option) => {
      let percentage = (option.vote * 100) / poll.totalVote;
      results.push({
        ...options,
        percentage,
      });
    });

    res.render("viewresults", { poll, results });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  homeController,
  createGetPollController,
  createPostPollController,
  pollListController,
  getSinglePollController,
  getSinglePollByIdAndPostController,
  getSinglePollByIdAndGetController,
};
