import { getProducts } from "../api";

const productListByCategory = async (category) => {
	try {
		const products = await getProducts(`products/category/${category}`);
		console.log(products);

		const productListElement = products
			.map(
				(item) => html`
					<div class="col-12 col-sm-6 col-md-4 col-lg-3">
						<img src="${item.thumbnail}" class="card-img-top" alt="${item.title} width="200">
						<div class="card-body">
							<h5 class="card-title">${item.title}</h5>
							<p class="card-text">Giá: ${item.price || "Đang cập nhật"}</p>
							<a href="#" class="btn btn-primary">Xem chi tiết</a>
						</div>
					</div>
				`
			)
			.join("");
		console.log(productListElement);
		return `<div class="row">${productListElement}</div>`;
	} catch (error) {
		console.log(error);
	}
};

export default productListByCategory;
