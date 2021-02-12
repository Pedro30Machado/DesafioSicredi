import { combineReducers } from "redux";
import { dragonsReducer } from "./dragonsReducer";

const mainReducer = combineReducers({
	dragons: dragonsReducer,
});

export default mainReducer;
