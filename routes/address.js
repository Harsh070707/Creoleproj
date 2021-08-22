const express = require("express");

const router = express.Router();
const address = require("../models/Address");

// Register Page
router.get("/add-user", (req, res) => res.render("add-user"));

router.post("/add-user", async (req, res) => {
  const add = new address(req.body);

  try {
    await add.save();
    res.redirect("/add-user");
    //res.status(201).send(add);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/show-user", async (req, res) => {
  try {
    const user = await address.find({});

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
