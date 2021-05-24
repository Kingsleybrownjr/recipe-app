import { getRecipes } from "./recipes";
import { getFilters } from "./filters";
import {removeIngredient} from './ingredients'

const renderRecipes = () => {
	const recipesDiv = document.querySelector("#recipes");
	const recipes = getRecipes();
	const filters = getFilters();

	const filterRecipes = recipes.filter(recipe =>
		recipe.title.toLowerCase().includes(filters.searchText)
	);

	recipesDiv.innerHTML = "";

	filterRecipes.forEach(recipe => {
		const recipeDiv = document.createElement("a");
		const recipeTitle = document.createElement("p");
		const recipeBody = document.createElement("p");

		recipeDiv.classList.add("recipe");
		recipeTitle.classList.add("recipe__title");
		recipeBody.classList.add("recipe__ingredients");

		recipeTitle.textContent = recipe.title;
		recipeBody.textContent = recipe.body;

		recipeDiv.setAttribute("href", `edit.html#${recipe.id}`);

		recipeDiv.appendChild(recipeTitle);
		recipeDiv.appendChild(recipeBody);
		recipesDiv.appendChild(recipeDiv);
	});
};

const renderEditPage = recipeId => {
	const recipeTitle = document.querySelector("#edit-title");
	const recipeBody = document.querySelector("#edit-body");

	const recipes = getRecipes();
	const recipe = recipes.find(recipe => recipe.id === recipeId);

	if (recipe === undefined) {
		location.assign("/index.html");
	}

	recipeTitle.value = recipe.title;
	recipeBody.value = recipe.body;

	renderIngredientsList(recipeId);
};

const renderIngredientsList = recipeId => {
	const ingredientsList = document.querySelector(".checklist__ingredients");

	const recipes = getRecipes();

	const recipe = recipes.find(recipe => recipe.id === recipeId);

	ingredientsList.innerHTML = "";

	recipe.ingredients.forEach(item => {
		const ingredientsDiv = document.createElement("div");
		const label = document.createElement("label");
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		const checkboxTitle = document.createElement("p");
		const deleteBtn = document.createElement("button");

		ingredientsDiv.classList.add("checklist__ingredients--list");
		checkbox.classList.add("checkbox");
		checkboxTitle.classList.add("checkbox__title");
		deleteBtn.classList.add("button", "deleteBtn");

		checkboxTitle.textContent = item.ingredients;
		deleteBtn.textContent = "Delete";

		label.appendChild(checkbox);
		label.appendChild(checkboxTitle);
		ingredientsDiv.appendChild(label);
		ingredientsDiv.appendChild(deleteBtn);
		ingredientsList.appendChild(ingredientsDiv);

		deleteBtn.addEventListener("click", () => {
			removeIngredient(recipe, item.id);
			renderIngredientsList(recipeId);
		});
	});
};

export { renderRecipes, renderEditPage, renderIngredientsList };
