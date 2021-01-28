import * as dragonTypes from "./types";
import { v4 as uuidv4 } from "uuid";

function reducer(state = [], action) {
	switch (action.type) {
		case dragonTypes.ADD_DRAGON:
			return state.concat({
				id: uuidv4(),
				name: action.payload.name,
				type: action.payload.type,
			});

		case "FETCH_DRAGONS":
			return [...action.payload];

		case dragonTypes.CHANGE_DRAGON:
			return state.map((dragon) => {
				if (dragon.id === action.payload.id) {
					return {
						...dragon,
						name: action.payload.name,
						type: action.payload.type,
					};
				} else {
					return dragon;
				}
			});

		case "CHANGE_DRAGON":
			return [...action.payload];

		case dragonTypes.DELETE_DRAGON:
			return state.filter((dragon) => {
				return dragon.id !== action.payload.id;
			});

		case "DELETE_DRAGON":
			return [...action.payload];

		default:
			throw new Error();
	}
}

export default reducer;
