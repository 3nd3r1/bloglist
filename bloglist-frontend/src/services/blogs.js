import axios from "axios";
const baseUrl = (process.env.REACT_APP_BACKEND_URL ?? "/api") + "/blogs";

let token = null;

const blogService = {};

blogService.setToken = (newToken) => {
	token = `Bearer ${newToken}`;
};

blogService.getAll = async () => {
	const response = await axios.get(baseUrl);
	return response.data;
};

blogService.create = async (newBlog) => {
	const config = {
		headers: { Authorization: token },
	};
	const response = await axios.post(baseUrl, newBlog, config);
	return response.data;
};

blogService.remove = async (id) => {
	const config = {
		headers: { Authorization: token },
	};
	const response = await axios.delete(baseUrl + "/" + id.toString(), config);
	return response.data;
};

blogService.update = async (newBlog, id) => {
	const config = {
		headers: { Authorization: token },
	};
	const response = await axios.put(
		baseUrl + "/" + id.toString(),
		newBlog,
		config
	);
	return response.data;
};

blogService.comment = async (id, comment) => {
	const response = await axios.post(
		baseUrl + "/" + id.toString() + "/comments",
		{ comment }
	);
	return response.data;
};

export default blogService;
