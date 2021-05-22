import { setFilters } from "./filters";
import { renderRecipes } from "./views";
import { createRecipe } from "./recipes";

const searchInput = document.querySelector("#search-input");
const addRecipeBtn = document.querySelector("#add-recipe");

renderRecipes();

searchInput.addEventListener("input", e => {
	setFilters({
		searchText: e.target.value,
	});
	renderRecipes();
});

addRecipeBtn.addEventListener("click", e => {
	const recipeId = createRecipe();
	location.assign(`/edit.html#${recipeId}`);
});
