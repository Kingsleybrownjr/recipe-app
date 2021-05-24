import { saveRecipes } from "./recipes";

const removeIngredient = (recipes, id) => {
	const recipeIndex = recipes.ingredients.findIndex(recipe => recipe.id === id);

	if (recipeIndex > -1) {
		recipes.ingredients.splice(recipeIndex, 1);
		saveRecipes();
	}
};

export { removeIngredient };
