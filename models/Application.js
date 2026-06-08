const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true
    },

    applicantName: {
      type: String,
      required: true
    },

    applicantEmail: {
      type: String,
      required: true
    },

    resume: {
      type: String
    },

    status: {
      type: String,
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Application",
  applicationSchema
);