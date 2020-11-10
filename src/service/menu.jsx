import store from "../store";
import ACTIONS from "../constants/actions";

const getElementMenu = () => {
	return document.getElementsByClassName("wrapper")[0];
};

const setValue = (data) => {
	store.dispatch({
		type: ACTIONS.SET_MENU,
		data,
	});
};

const getValue = () => {
	return store.getState().menu;
};

const changeMenu = () => {
	if (menuIsOpen()) {
		getElementMenu().classList.remove("open");
		setValue(false);
	} else {
		getElementMenu().classList.add("open");
		setValue(true);
	}
};

const menuIsOpen = () => {
	return getElementMenu().classList.contains("open");
};

export default {
	getElementMenu,
	setValue,
	getValue,
	changeMenu,
};
