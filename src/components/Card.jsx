import React from "react";
import { Card } from "@material-ui/core";

export default function CustomCard(props) {
	return <Card variant="outlined">{props.children}</Card>;
}
