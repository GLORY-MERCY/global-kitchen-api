const recipeService = require("../services/recipe.service");

const getAllRecipes = async (req, res, next) => {
  try {
    const { category } = req.query;
    const recipes = await recipeService.getAllRecipes(category);
    res.json({ success: true, data: recipes });
  } catch (error) {
    next(error);
  }
};

const getRecipeById = async (req, res, next) => {
  try {
    const recipe = await recipeService.getRecipeById(req.params.id);
    if (!recipe) {
      return res
        .status(404)
        .json({ success: false, message: "Recipe not found" });
    }
    res.json({ success: true, data: recipe });
  } catch (error) {
    next(error);
  }
};

const createRecipe = async (req, res, next) => {
  try {
    const newRecipe = await recipeService.createRecipe(req.body);
    res.status(201).json({ success: true, data: newRecipe });
  } catch (error) {
    next(error);
  }
};

const updateRecipe = async (req, res, next) => {
  try {
    const updated = await recipeService.updateRecipe(req.params.id, req.body);
    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Recipe not found" });
    }
    res.json({ success: true, data: updated });
  } catch (error) {
    next(error);
  }
};

const deleteRecipe = async (req, res, next) => {
  try {
    const deleted = await recipeService.deleteRecipe(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Recipe not found" });
    }
    res.json({ success: true, message: "Recipe deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
