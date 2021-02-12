import React from "react";
import Navbar from "./components/navbar";
import Rotas from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Rotas />
			</div>
		</BrowserRouter>
	);
}

export default App;
