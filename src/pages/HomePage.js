import { getProducts } from "../api";

const HomePage = async () => {
	try {
		const products = await getProducts();
		console.log(products);

		const productListElement = products
			.map(
				(item) => /*html*/ `
        <div class="card" style="width: 18rem;">
          <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
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
		return productListElement;
	} catch (error) {
		console.log(error);
	}
};

export default HomePage;
