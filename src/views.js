import { getRecipes } from "./recipes";
import { getFilters } from "./filters";

const renderRecipes = () => {
	const recipesDiv = document.querySelector("#recipes");

	const recipes = getRecipes();
	const filters = getFilters();

	const filterRecipes = recipes.filter(recipe =>
		recipe.title.toLocaleLowerCase().includes(filters.searchText)
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
};

export { renderRecipes, renderEditPage };
