import { updateRecipe, saveRecipes, removeRecipe } from "./recipes";
import { renderEditPage, renderIngredientsList } from "./views";

const recipeTitle = document.querySelector("#edit-title");
const recipeBody = document.querySelector("#edit-body");
const removeRecipeBtn = document.querySelector("#remove-recipe");
const addIngredientInput = document.querySelector("#add-ingredient");
const completeRecipeBtn = document.querySelector("#complete");
const addIngredientBtn = document.querySelector("#addBtn");

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

addIngredientBtn.addEventListener("click", e => {
	e.preventDefault();

	if (addIngredientInput.value === "") return;

	updateRecipe(recipeId, {
		ingredients: addIngredientInput.value,
	});
	saveRecipes();
	renderIngredientsList(recipeId);
	addIngredientInput.value = "";
});

completeRecipeBtn.addEventListener("click", () => saveRecipes());

removeRecipeBtn.addEventListener("click", () => removeRecipe(recipeId));

window.addEventListener("storage", e => {
	if (e.key === "recipe") {
	}
});
