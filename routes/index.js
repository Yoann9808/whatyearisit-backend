var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET Year
router.get("/year", function (req, res) {
  let date = new Date();
  let year = date.getFullYear();
  res.json({ year: year });
});

module.exports = router;
