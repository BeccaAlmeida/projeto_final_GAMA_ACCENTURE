import axios from "axios";

// https://cors-anywhere.herokuapp.com/

const api = axios.create({
	baseURL: "https://remotecontroller.herokuapp.com",
});

export default api;
