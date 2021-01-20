import React, { useEffect, useState } from "react";
import DragonTableList from "./DragonTableList";
import axios from "axios";

export default function DragonList() {
	const [dragon, setDragon] = useState({});
	async function fetchDragons() {
		axios.get(
			"http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
		).then((res) => {
			setDragon(res.data);
		});
	}
	useEffect(() => {
		fetchDragons();
	}, []);
	return <DragonTableList list={dragon} />;
}
