const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    ingredients: {
      type: [String],
      required: [true, "Ingredients are required"],
    },
    instructions: {
      type: String,
      required: [true, "Instructions are required"],
      trim: true,
    },
    cookingTime: {
      type: Number,
      required: [true, "Cooking time is required"],
      min: [1, "Cooking time must be a positive number"],
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: [true, "Difficulty is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
  },
  { timestamps: true },
);

recipeSchema.index({ category: 1 });

module.exports = mongoose.model("Recipe", recipeSchema);
