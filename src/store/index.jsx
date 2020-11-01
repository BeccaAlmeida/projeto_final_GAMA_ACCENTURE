import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "../reducer";
import state from "./state";

export default createStore(reducer, state, applyMiddleware(logger));
