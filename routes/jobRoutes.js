const express = require("express");

const router = express.Router();

const {
  createJob,
  getJobs,
  getSingleJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

router.post("/", createJob);

router.get("/", getJobs);

router.get("/:id", getSingleJob);

router.put("/:id", updateJob);

router.delete("/:id", deleteJob);

module.exports = router;