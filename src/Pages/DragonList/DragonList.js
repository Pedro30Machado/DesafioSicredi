import React, { useEffect, useState } from "react";
import DragonTableList from "./DragonTableList";
import axios from "axios";
import sort from "./sort";

export default function DragonList() {
	const [dragon, setDragon] = useState([]);
	async function getDragons() {
		axios.get(
			"http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
		).then((res) => {
			setDragon(sort(res.data, "name", "a"));
		});
	}
	useEffect(() => {
		getDragons();
	});
	return <DragonTableList list={dragon} />;
}
