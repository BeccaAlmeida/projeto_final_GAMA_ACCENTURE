import React, { Component } from "react";
import api from "../../service/api";

class ReserveListActor extends Component {
	componentDidMount() {
		api.get("/reserve/listByActress/1")
			.then(({ data }) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return <h1>asdas</h1>;
	}
}

export default ReserveListActor;
