import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "../reducer";
import state from "./initialState";

var store =
	process.env.NODE_ENV === "production"
		? createStore(reducer, state)
		: createStore(reducer, state, applyMiddleware(logger));

export default store;
