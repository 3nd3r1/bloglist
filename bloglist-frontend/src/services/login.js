import axios from "axios";
const baseUrl = "/bloglist-api/login";

const loginService = {};

loginService.login = async (credentials) => {
	const response = await axios.post(baseUrl, credentials);
	return response.data;
};

export default loginService;
