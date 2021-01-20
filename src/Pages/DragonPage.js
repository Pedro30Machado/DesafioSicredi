import React from "react";
import DragonList from "./DragonList/DragonList";
import DragonCreate from "./DragonCreate/DragonCreate";

function DragonPage() {
	return (
		<>
			<DragonCreate />
			<DragonList />
		</>
	);
}

export default DragonPage;
