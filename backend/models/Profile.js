const mongoose = required('momgoose')

const profileSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },

    headline: {
      type: String,
      trim: true,
      maxlength: 120,
    },

    bio: {
      type: String,
      trim: true,
      maxlength: 1000,
    },

    phone: {
      type: String,
      trim: true,
      match: /^[+]?[\d\s()-]{7,20}$/,
    },

    location: {
      type: String,
      trim: true,
      maxlength: 100,
    },

    targetRoles: {
      type: [String],
      default: [],
      validate: {
        validator: (roles) => roles.length <= 10,
        message: "You can add a maximum of 10 target roles.",
      },
    },

    skills: {
      type: [String],
      default: [],
      validate: {
        validator: (skills) => skills.length <= 50,
        message: "You can add a maximum of 50 skills.",
      },
    },

    experienceLevel: {
      type: String,
      enum: [
        "fresher",
        "junior",
        "mid",
        "senior",
      ],
      default: "fresher",
    },

    preferredLocations: {
      type: [String],
      default: [],
      validate: {
        validator: (locations) => locations.length <= 10,
        message: "You can add a maximum of 10 preferred locations.",
      },
    },

    workPreference: {
      type: String,
      enum: [
        "onsite",
        "hybrid",
        "remote",
        "any",
      ],
      default: "any",
    },

    expectedSalary: {
      type: Number,
      min: 0,
      default: null,
    },

    education: {
      type: [educationSchema],
      default: [],
    },

    experience: {
      type: [experienceSchema],
      default: [],
    },

    githubUrl: {
      type: String,
      trim: true,
      match: /^https?:\/\/(www\.)?github\.com\/.+$/i,
    },

    linkedinUrl: {
      type: String,
      trim: true,
      match: /^https?:\/\/(www\.)?linkedin\.com\/.+$/i,
    },
    portfolioUrl: {
      type: String,
      trim: true,
      match: /^https?:\/\/.+$/i,
    },
    timestamps: true,
})
module.exports = mongoose.model("Profile", profileSchema);