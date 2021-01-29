import React, { useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Context from "../GlobalStates/Context";

export default function DragonDelete() {
	const { dispatchDragons } = useContext(Context);

	const { handleDelete } = useFormik({
		state: {
			id: "",
		},
		onDelete: axios
			.delete(
				`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${this.state.id}`
			)
			.then(() => {
				axios.get(
					"http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
				).then((res) => {
					dispatchDragons({
						type: "FETCH_DRAGONS",
						payload: res.data,
					});
				});
			}),
	});

	return <DragonDelete onDelete={handleDelete} />;
}
