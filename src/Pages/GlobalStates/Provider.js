import React, { useReducer } from "react";
import Context from "./Context";
import reducer from "./reducer";

function Provider({ children }) {
	const [dragons, dispatchDragons] = useReducer(reducer, []);
	return (
		<Context.Provider value={{ dragons, dispatchDragons }}>
			{children}
		</Context.Provider>
	);
}

export default Provider;
