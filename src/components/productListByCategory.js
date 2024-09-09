import { getProducts } from "../api";
import productItem from "./productItem";

const productListByCategory = async (category) => {
	try {
		console.log(category);
		let products = [];
		if (category !== "all") {
			products = await getProducts(`products/category/${category}`);
		} else {
			products = await getProducts();
			console.log(products);
		}

		const productListElement = products
			.map(
				(item) => /*html*/ `
					<div class="col-12 col-sm-6 col-md-4 gy-5">
						${productItem(item)}
					</div>
				`
			)
			.join("");

		return `<div class="row">${productListElement}</div>`;
	} catch (error) {
		console.log(error);
	}
};

export default productListByCategory;
