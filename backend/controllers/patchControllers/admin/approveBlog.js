const Blogs = require("../../../models/blogs");

module.exports = async (req, res) => {
  const filters = {
    state: (req.query.state && [req.query.state]) || [
      "DRAFT",
      "PENDING",
      "DISCARDED",
      "APPROVED",
    ],
    postedAtGt: (req.query.gt && getUTCDate(req.query.gt)) || new Date(2019), //since we publised first version in 2021 itself;
    postedAtLt:
      (req.query.lt && getUTCDate(req.query.lt)) ||
      new Date(Date.now() + 1000 * 60 * 60), // there will be now blogs in our db posted in future, ofcourse;
    page: req.query.page || 0,
    limit: (req.query.limit && parseInt(req.query.limit)) || 10000,
  };
  let dbFilters = {
    postedAt: { $gt: filters.postedAtGt, $lt: filters.postedAtLt },
    state: { $in: filters.state },
  };
  const id = req.params.id;
  try {
    await Blogs.findByIdAndUpdate(id, {
      $set: {
        state: "APPROVED",
      },
    });
    const totalItems = await Blogs.countDocuments(dbFilters);
    const blogs = await Blogs.find(dbFilters)
      .sort({ postedAt: -1 })
      .skip(filters.page * filters.limit) //pagination starts from 0
      .limit(filters.limit); //getting blogs;
    return res.send({ totalItems, blogs });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ errorMsg: "Internal Server Error!" });
  }
};
