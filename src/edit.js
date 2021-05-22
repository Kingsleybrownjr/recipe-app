import { updateRecipe, saveRecipes, removeRecipe } from "./recipes";
import { renderEditPage } from "./views";

const recipeTitle = document.querySelector("#edit-title");
const recipeBody = document.querySelector("#edit-body");
const removeRecipeBtn = document.querySelector("#remove-recipe");
const completeRecipeBtn = document.querySelector("#complete");

const recipeId = location.hash.substring(1);

renderEditPage(recipeId);

recipeTitle.addEventListener("input", e => {
	updateRecipe(recipeId, {
		title: e.target.value,
	});
});

recipeBody.addEventListener("input", e => {
	updateRecipe(recipeId, {
		body: e.target.value,
	});
});

completeRecipeBtn.addEventListener("click", e => saveRecipes());

removeRecipeBtn.addEventListener("click", e => removeRecipe(recipeId));

window.addEventListener("storage", e => {
	if (e.key === "recipe") {
	}
});
