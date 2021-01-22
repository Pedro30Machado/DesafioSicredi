export default function sort(array, column, order = "") {
	if (array === null || array === undefined) return [];
	if (array.length === 0) return array;
	if (!array[0][column]) return array;
	if (order === "" || column === "") return array;
	if (typeof array[0][column] === "string") {
		if (order === "a")
			return [...array].sort((a, b) =>
				a[column].localeCompare(b[column])
			);
		if (order === "d")
			return [...array].sort((a, b) =>
				b[column].localeCompare(a[column])
			);
	} else {
		if (order === "a") return [...array].sort((a, b) => a - b);
		if (order === "d") return [...array].sort((a, b) => b - a);
	}
}
