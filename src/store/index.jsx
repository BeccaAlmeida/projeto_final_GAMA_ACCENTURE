import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "../reducer";
import state from "./state";

var store = createStore(reducer, state, applyMiddleware(logger));

export default store;
