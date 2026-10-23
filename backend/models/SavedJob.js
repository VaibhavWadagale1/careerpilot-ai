const mongoose = require("mongoose");

const savedJobSchema = new mongoose.Schema(
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
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

// Prevent the same user from saving the same job multiple times
savedJobSchema.index(
  { userId: 1, jobId: 1 },
  { unique: true }
);

module.exports = mongoose.model("SavedJob", savedJobSchema);