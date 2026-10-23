const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
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

    status: {
      type: String,
      required: true,
      enum: [
        "applied",
        "screening",
        "interview",
        "offer",
        "rejected",
        "withdrawn",
      ],
      default: "applied",
    },

    appliedAt: {
      type: Date,
    },

    interviewDate: {
      type: Date,
    },

    notes: {
      type: String,
      maxlength: 2000,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate applications for the same job by the same user
applicationSchema.index(
  { userId: 1, jobId: 1 },
  { unique: true }
);

module.exports = mongoose.model("Application", applicationSchema);