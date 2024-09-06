import productListByCategory from "../components/productList";

const CategoryPage = async () => {
	return html`
		<div class="container">
			<section>
				<h2>Beauty</h2>
				${await productListByCategory("beauty")}
			</section>
			<section>
				<h2>Fragrances</h2>
				${await productListByCategory("fragranceseauty")}
			</section>
			<section>
				<h2>Furniture</h2>
				${await productListByCategory("furniture")}
			</section>
			<section>
				<h2>Groceries</h2>
				${await productListByCategory("groceries")}
			</section>
		</div>
	`;
};

export default CategoryPage;
