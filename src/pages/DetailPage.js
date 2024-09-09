import { getProductById } from "../api";

const DetailPage = async ({ data }) => {
	const product = await getProductById(data.id);
	console.log(product);
	return /*html*/ `
    <div class="container">
    <h1>Chi tiết sản phẩm</h1>
    <div class="row">
        <div class="col-12 col-md-6">
          <img src="${product.thumbnail}" class="img-fluid" alt="${product.title}" />
        </div>
        <div class="col-12 col-md-6">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Giá: ${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <p>Số lượng: ${product.stock}</p>
            <button class="btn btn-danger">Thêm vào giỏ hàng</button>
        </div>
    </div>
    </div>

  `;
};

export default DetailPage;
