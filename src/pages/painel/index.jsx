import React, { Component } from "react";
import store from "../../store";
import PainelProdutor from "../../components/painel/PainelProdutor";
import PainelAtor from "../../components/painel/PainelAtor";

class Painel extends Component {
	render() {
		return store.getState().usuario.typeUserEnumeration === 2 ? (
			<PainelProdutor />
		) : (
			<PainelAtor></PainelAtor>
		);
	}
}

export default Painel;
