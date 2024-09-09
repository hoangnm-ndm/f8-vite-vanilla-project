import { getProducts } from "../api";

const AdminPage = async () => {
	try {
		const products = await getProducts();

		return /*html*/ `
      <div class="container">
        <h1>Quản lý sản phẩm</h1>
        <a href="product-form" class="btn btn-link">Thêm sản phẩm mới</a>
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Rating</th>
              <th>Số lượng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            ${products
							.map(
								(product) => /*html*/ `
                  <tr>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td>${product.rating}</td>
                    <td>${product.stock}</td>
                    <td>
                      <a href="product-form/:id" class="btn btn-warning">Sửa</a>
                      <button class="btn btn-danger">Xóa</button>
                    </td>
                  </tr>
                `
							)
							.join("")}
          </tbody>
        </table>
      </div>
    `;
	} catch (error) {
		console.log("Error", error);
	}
};

export default AdminPage;
