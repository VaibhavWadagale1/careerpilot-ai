const mongoose = require("mongoose");

const interviewSessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },

    type: {
      type: String,
      required: true,
      enum: ["technical", "behavioral", "hr", "mixed"],
    },

    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },

    questions: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },

    overallScore: {
      type: Number,
      min: 0,
      max: 100,
    },

    strengths: {
      type: [String],
      default: [],
    },

    improvementAreas: {
      type: [String],
      default: [],
    },

    completedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

interviewSessionSchema.index({
  userId: 1,
  createdAt: -1,
});

module.exports = mongoose.model(
  "InterviewSession",
  interviewSessionSchema
);