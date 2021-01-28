import React, { useEffect, useContext } from "react";
import DragonTableList from "./DragonTableList";
import axios from "axios";
import sort from "./sort";
import Context from "../GlobalStates/Context";

export default function DragonList() {
	const { dragons, dispatchDragons } = useContext(Context);
	async function getDragons() {
		axios.get("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
			.then(function (res) {
				console.log(res.data);
				dispatchDragons({
					type: "FETCH_DRAGONS",
					payload: res.data,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	useEffect(() => {
		getDragons();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <DragonTableList list={sort(dragons, "name", "a")} />;
}
