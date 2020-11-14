import React from "react";
import { Card } from "@material-ui/core";

export default function CustomCard(props) {
	return <Card variant="outlined" style={{backgroundColor: ' #906cda'}}>{props.children}</Card>;
}