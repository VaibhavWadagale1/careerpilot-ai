const mongoose = require("mongoose");

const resumeAnalysisSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },

    overallScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    atsScore: {
      type: Number,
      min: 0,
      max: 100,
    },

    strengths: {
      type: [String],
      default: [],
    },

    weaknesses: {
      type: [String],
      default: [],
    },

    suggestions: {
      type: [String],
      default: [],
    },

    missingKeywords: {
      type: [String],
      default: [],
    },

    formatIssues: {
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

resumeAnalysisSchema.index({
  userId: 1,
  resumeId: 1,
});

module.exports = mongoose.model("ResumeAnalysis", resumeAnalysisSchema);