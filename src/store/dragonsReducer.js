import axios from "axios";

const http = axios.create({
	baseURL: "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon",
});

const ACTIONS = {
	LIST: "LIST_DRAGONS",
	ADD: "ADD_DRAGONS",
	DELETE: "DELETE_DRAGONS",
	UPDATE: "UPDATE_DRAGONS",
};

const ESTADO_INICIAL = {
	dragons: [],
};

export const dragonsReducer = (state = ESTADO_INICIAL, action) => {
	switch (action.type) {
		case ACTIONS.LIST:
			return { ...state, dragons: action.dragons };

		case ACTIONS.ADD:
			return { ...state, dragons: [...state.dragons, action.dragon] };

		case ACTIONS.UPDATE:
			return {
				...state,
				dragons: [
					...state.dragons.filter((dragon) => dragon.id !== action.id),
					{
						id: action.id,
						name: action.dragon.name,
						type: action.dragon.type,
						createdAt: action.dragon.createdAt
					},
				],
			};

		case ACTIONS.DELETE:
			const id = action.id;
			const dragons = state.dragons.filter(
				(dragons) => dragons.id !== id
			);
			return { ...state, dragons: dragons };

		default:
			return state;
	}
};

export function listar() {
	return (dispatch) => {
		http.get().then((response) => {
			dispatch({
				type: ACTIONS.LIST,
				dragons: response.data,
			});
		});
	};
}

export function criar(dragon) {
	return (dispatch) => {
		http.post("", dragon).then((response) => {
			dispatch({
				type: ACTIONS.ADD,
				dragon: response.data,
			});
		});
	};
}

export function deletar(id) {
	return (dispatch) => {
		http.delete(`/${id}`).then((response) => {
			dispatch({
				type: ACTIONS.DELETE,
				id: id,
			});
		});
	};
}

export function editar(id, dragon) {
	return (dispatch) => {
		http.put(`/${id}`, dragon).then((response) => {
			console.log(response.data)
			dispatch({
				type: ACTIONS.UPDATE,
				dragon: response.data,
				id: id,
			});
		});
	};
}
