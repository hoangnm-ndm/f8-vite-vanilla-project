import axios from "axios";

const instance = axios.create({
	headers: {
		"Content-Type": "application/json",
	},
	baseURL: "https://dummyjson.com",
});

export const getProducts = async (path = "/products") => {
	try {
		const { data } = await instance.get(path);
		return data.products;
	} catch (error) {
		console.error("Error fetching", error);
	}
};

export default instance;
