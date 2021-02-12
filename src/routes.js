import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Create from "./dragoes/create";
import Login from "./Login/Login";
import PrivateRoute from "./PrivateRoute";

export default function Rotas() {
	return (
		<Switch>
			<PrivateRoute exact path="/create" component={Create} />
			<PrivateRoute exact path="/home" component={Home} />
			<Route path="/" component={Login} />
		</Switch>
	);
}
