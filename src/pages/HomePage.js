import productListByCategory from "../components/productListByCategory";

const HomePage = async () => {
	try {
		return `<div class="container">
			<div class="row">${await productListByCategory("all")}</div>
		</div>`;
	} catch (error) {
		console.log(error);
	}
};

export default HomePage;
