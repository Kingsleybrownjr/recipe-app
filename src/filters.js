const filters = {
	searchText: "",
};

const setFilters = update => {
	if (typeof update.searchText === "string") {
		filters.searchText = update.searchText;
	}
};

const getFilters = () => filters;

export { setFilters, getFilters };
