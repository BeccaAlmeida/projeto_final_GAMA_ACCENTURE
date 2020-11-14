import store from "../store";
import ACTIONS from "../constants/actions";

const usuarios = ["atriz", "ator", "produtor", "produtora"];

const auth = (login, password) => {
	return new Promise((resolve, reject) => {
		if (!login) reject("Informe um usuario");
		if (!password) reject("Informe uma senha");
		setTimeout(() => {
			if (
				usuarios.includes(login) &&
				password.toLowerCase() === "123456"
			) {
				store.dispatch({
					type: ACTIONS.SET_AUTH,
					data: true,
				});

				if (login === "atriz" || login === "autor") {
					store.dispatch({
						type: ACTIONS.SET_USER,
						data: {
							nome: login,
							password,
							typeUserEnumeration: 1,
						},
					});
				} else {
					store.dispatch({
						type: ACTIONS.SET_USER,
						data: {
							nome: login,
							password,
							typeUserEnumeration: 2,
						},
					});
				}

				resolve();
			} else {
				reject("Usuario nao encontrado");
			}
		}, 1000);
	});
};

export default { auth };
