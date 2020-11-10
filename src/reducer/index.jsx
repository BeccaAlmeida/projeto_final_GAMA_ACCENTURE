import initialState from "../store/initialState";
import ACTIONS from "../constants/actions";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.SET_AUTH:
			return Object.assign({}, state, { auth: action.data });
		case ACTIONS.SET_ROUTE:
			return Object.assign({}, state, { route: action.data });
		case ACTIONS.SET_MENU:
			return Object.assign({}, state, { menu: action.data });

		default:
			return state;
	}
};

export default reducer;
