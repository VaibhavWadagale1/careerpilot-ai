const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    externalId: {
      type: String,
      required: true,
      trim: true,
    },

    source: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    title: {
      type: String,
      required: true,
      maxlength: 200,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      maxlength: 150,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      maxlength: 200,
      trim: true,
    },

    workplaceType: {
      type: String,
      enum: ["remote", "hybrid", "onsite", "unknown"],
      default: "unknown",
    },

    employmentType: {
      type: String,
      enum: ["full-time", "part-time", "contract", "internship"],
    },

    experienceLevel: {
      type: String,
      enum: ["fresher", "junior", "mid", "senior", "unknown"],
      default: "unknown",
    },

    skills: {
      type: [String],
      default: [],
    },

    salaryMin: {
      type: Number,
      min: 0,
    },

    salaryMax: {
      type: Number,
      min: 0,
      validate: {
        validator: function (value) {
          return value === undefined || this.salaryMin === undefined || value >= this.salaryMin;
        },
        message: "salaryMax must be greater than or equal to salaryMin",
      },
    },

    currency: {
      type: String,
      uppercase: true,
      trim: true,
    },

    jobUrl: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (value) {
          try {
            new URL(value);
            return true;
          } catch {
            return false;
          }
        },
        message: "jobUrl must be a valid URL",
      },
    },

    postedAt: {
      type: Date,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);