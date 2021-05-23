const filters = {
	searchText: "",
	ingredientText: "",
};

const setFilters = update => {
	if (typeof update.searchText === "string") {
		filters.searchText = update.searchText;
	}

	if (typeof update.ingredientText === "string") {
		filters.ingredientText = update.ingredientText;
	}
	
};

const getFilters = () => filters;

export { setFilters, getFilters };
