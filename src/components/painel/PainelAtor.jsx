import React, { Component } from "react";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import ReserveListActor from "./ReserveListActor";

export default function PainelAtor() {
	return (
		<main>
			<CustomGrid>
				<h3>Minhas reservas</h3>
				<ReserveListActor></ReserveListActor>
			</CustomGrid>
		</main>
	);
}
