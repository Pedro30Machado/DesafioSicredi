import React, { useContext } from "react";
import axios from "axios";
import Context from "../GlobalStates/Context";

export default class DragonDelete extends React.Component {
	handleChange = (evt) => {
		this.setState({ name: evt.target.value, type: evt.target.value });
	};

	handleSubmit = (evt) => {
		evt.preventDefault();

		// eslint-disable-next-line react-hooks/rules-of-hooks
		const { dragons, dispatchDragons } = useContext(Context);

		axios.delete(
			`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${this.state.id}`
		).then((res) => {
			axios.get(
				"http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
			).then((res) => {
				dispatchDragons({
					type: "DELETE_DRAGONS",
					payload: res.data,
				});
			});
		});
	};

	render() {
		return (
			// eslint-disable-next-line no-undef
			<button onClick={handleSubmit}></button>
		);
	}
}
