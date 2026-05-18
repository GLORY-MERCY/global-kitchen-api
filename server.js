require("dotenv").config();
const express = require("express");
const connectDB = require("./src/db");
const recipeRoutes = require("./src/routes/recipe.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/recipes", recipeRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
