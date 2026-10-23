const mongoose = require("mongoose");

const jobAnalysisSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },

    matchScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    matchedSkills: {
      type: [String],
      default: [],
    },

    missingSkills: {
      type: [String],
      default: [],
    },

    matchingKeywords: {
      type: [String],
      default: [],
    },

    missingKeywords: {
      type: [String],
      default: [],
    },

    strengths: {
      type: [String],
      default: [],
    },

    recommendations: {
      type: [String],
      default: [],
    },

    aiProvider: {
      type: String,
      trim: true,
    },

    aiModel: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("JobAnalysis", jobAnalysisSchema);