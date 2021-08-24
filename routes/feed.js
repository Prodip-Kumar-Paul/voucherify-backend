const express = require("express");
const { body } = require("express-validator");

const feedController = require("../controller/feed");

const router = express.Router();

// GET routes
router.get("/", feedController.getForm);

module.exports = router;
