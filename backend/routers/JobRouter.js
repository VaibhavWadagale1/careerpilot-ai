
const express = require("express");
const getJobPosting = require("../controllers/JobController.js");
const router = express.Router();

router.get("/:boardToken", getJobPosting);

module.exports = router;
