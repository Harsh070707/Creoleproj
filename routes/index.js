const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

// Welcome Page
router.get("/", forwardAuthenticated, (req, res) => res.render("welcome"));

router.get("/add-user", function (req, res) {
  res.render("add-user");
});

router.get("/show-user", function (req, res) {
  res.render("show-user");
});

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    user: req.user,
  })
);

module.exports = router;
