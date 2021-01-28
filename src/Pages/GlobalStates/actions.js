import * as dragonTypes from "./types";

export function addDragon(name, type) {
	return {
		type: dragonTypes.ADD_DRAGON,
		payload: {
			name: name,
			type: type,
		},
	};
}

export function changeDragon(id, name, type) {
	return {
		type: dragonTypes.CHANGE_DRAGON,
		payload: {
			id: id,
			name: name,
			type: type,
		},
	};
}

export function deleteDragon(id) {
	return {
		type: dragonTypes.DELETE_DRAGON,
		payload: {
			id: id,
		},
	};
}
