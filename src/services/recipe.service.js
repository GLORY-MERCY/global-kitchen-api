const Recipe = require("../models/recipe.model");

const getAllRecipes = async (category) => {
  const filter = category ? { category } : {};
  return await Recipe.find(filter);
};

const getRecipeById = async (id) => {
  return await Recipe.findById(id);
};

const createRecipe = async (data) => {
  if (data.cookingTime <= 0) {
    throw new Error("Cooking time must be a positive number");
  }
  const recipe = new Recipe(data);
  return await recipe.save();
};

const updateRecipe = async (id, data) => {
  return await Recipe.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
