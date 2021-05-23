import { setFilters, getFilters } from "./filters";
import { updateRecipe, saveRecipes, removeRecipe } from "./recipes";
import { renderEditPage } from "./views";

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

const createIngredients = () => {
	const ingredientsDiv = document.querySelector(".checklist__ingredients");
	const ingredientListDiv = document.createElement("div");
	const ingredientLabel = document.createElement("label");
	const checkbox = document.createElement("input");
	const checkboxTitle = document.createElement("p");
	const deleteButton = document.createElement("button");
	const ingredient = getFilters().ingredientText;
	console.log(ingredient);

	checkbox.type = "checkbox";

	ingredientListDiv.classList.add("checklist__ingredients--list");
	checkbox.classList.add("checkbox");
	checkboxTitle.classList.add("checkbox__title");
	deleteButton.classList.add("button");
	deleteButton.textContent = "Delete Recipe";
	checkboxTitle.textContent = ingredient;
	ingredientLabel.appendChild(checkbox);
	ingredientLabel.appendChild(checkboxTitle);

	ingredientListDiv.appendChild(ingredientLabel);
	ingredientListDiv.appendChild(deleteButton);

	ingredientsDiv.appendChild(ingredientListDiv);
};

addIngredientInput.addEventListener("input", e => {
	setFilters({
		ingredientText: e.target.value,
	});
});

addIngredientBtn.addEventListener("click", e => {
	e.preventDefault();
	createIngredients();
	addIngredientInput.value = "";
});

completeRecipeBtn.addEventListener("click", e => saveRecipes());

removeRecipeBtn.addEventListener("click", e => removeRecipe(recipeId));

window.addEventListener("storage", e => {
	if (e.key === "recipe") {
	}
});
