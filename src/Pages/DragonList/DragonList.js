import React, { useEffect, useState } from "react";
import DragonTableList from "./DragonTableList";
import axios from "axios";
import sort from "./sort";

export default function DragonList() {
	const [dragon, setDragon] = useState([]);

	async function fetchDragons() {
		axios.get(
			"http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
		).then((res) => {
			// eslint-disable-next-line no-restricted-globals
			setDragon(sort(res.data, "name", "a"));
		});
	}
	useEffect(() => {
		fetchDragons();
	});
	return <DragonTableList list={dragon} />;
}
