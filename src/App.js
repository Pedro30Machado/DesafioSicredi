import React from "react";
import Provider from "./Pages/GlobalStates/Provider";
import DragonPage from "./Pages/DragonPage";

function App() {
	return (
		<Provider>
			<DragonPage />
		</Provider>
	);
}
export default App;
