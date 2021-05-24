import { saveRecipes } from "./recipes";

const removeIngredient = (recipes, id) => {
	const recipeIndex = recipes.ingredients.findIndex(recipe => recipe.id === id);

	if (recipeIndex > -1) {
		recipes.ingredients.splice(recipeIndex, 1);
		saveRecipes();
	}
};

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

export { removeIngredient, capitalizeFirstLetter };
