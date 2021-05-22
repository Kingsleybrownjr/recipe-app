import { v4 as uuidv4 } from "uuid";

let recipes = [
	{
		title: "Pizza",
		body: "You have all ingredients",
	},
	{
		title: "Burrito",
		body: "You have some of the ingredients",
	},
	{
		title: "rice tacos",
		body: "You have one of the ingredients",
	},
	{
		title: "Pancakes",
		body: "You have one of the ingredients",
	},
];

const getRecipes = () => recipes;

const updateRecipe = (id, updates) => {
	const recipe = recipes.find(recipe => recipe.id === id);

	if (!recipe) return;

	if (typeof updates.title === "string") {
		recipe.title = updates.title;
	}

	if (typeof updates.body === "string") {
		recipe.body = updates.body;
	}

	return recipe;
};

const createRecipe = () => {
	const recipeId = uuidv4();
	recipes.push({
		title: "",
		id: recipeId,
		body: "",
	});
	saveRecipes();
	return recipeId;
};

// Read existing notes from localStorage
const loadRecipes = () => {
	const recipesJSON = localStorage.getItem("recipes");

	try {
		return recipesJSON ? JSON.parse(recipesJSON) : [];
	} catch (e) {
		return [];
	}
};

// Save the recipes to localStorage
const saveRecipes = () =>
	localStorage.setItem("recipes", JSON.stringify(recipes));

recipes = loadRecipes();

// Remove a note from the list
const removeRecipe = id => {
	const recipeIndex = recipes.findIndex(recipe => recipe.id === id);

	if (recipeIndex > -1) {
		recipes.splice(recipeIndex, 1);
		saveRecipes();
	}
};

export { getRecipes, createRecipe, updateRecipe, removeRecipe, saveRecipes };
