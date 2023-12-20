import axios from "axios";
const baseUrl = (process.env.REACT_APP_BACKEND_URL ?? "/api") + "/login";

const loginService = {};

loginService.login = async (credentials) => {
	const response = await axios.post(baseUrl, credentials);
	return response.data;
};

export default loginService;
