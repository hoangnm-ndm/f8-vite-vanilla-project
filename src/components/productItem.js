const productItem = (item) => {
	return /*html*/ `
    <div class="products--item">
      <div class="products--item__img">
        <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}" />
      </div>
      <div class="products--item__content">
        <h5 class="products--item__title">${item.title}</h5>
        <p class="products--item__price">Giá: ${item.price || "Đang cập nhật"}</p>
        <a href="/products/${item.id}" class="btn btn-primary w-100">Xem chi tiết</a>
      </div>
	  </div>
  `;
};

export default productItem;
