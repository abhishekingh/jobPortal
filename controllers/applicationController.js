const Application = require("../models/Application");

exports.applyJob = async (req, res) => {
  try {

    const { applicant, job } = req.body;

    const existing =
    await Application.findOne({
      applicant,
      job
    });

    if (existing) {
      return res.status(400).json({
        message:
        "Already Applied"
      });
    }

    const application =
    await Application.create({
      applicant,
      job
    });

    res.status(201).json(
      application
    );

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }
};

exports.getApplications =
async (req, res) => {

  try {

    const applications =
    await Application.find()
      .populate(
        "applicant",
        "name email"
      )
      .populate(
        "job",
        "title company"
      );

    res.json(
      applications
    );

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }
};