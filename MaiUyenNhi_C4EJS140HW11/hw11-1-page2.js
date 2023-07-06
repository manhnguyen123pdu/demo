let dataDetail = JSON.parse(localStorage.getItem('detailProduct'));

let content = 
  `
    <div class="product-detail">
    <div class="left">
      <img src="${dataDetail.img[1]}" alt="error">
    </div>
    <div class="right">
      <p class="name">${dataDetail.nameProduct}</p>
      <p>${dataDetail.price}
      <span class="discount">-${dataDetail.discount}%</span></p>
      <hr>
      <button class="quantity-button">-</button>
      <button class="quantity-button to-left">0</button>
      <button class="quantity-button to-left">+</button>
      <button onclick="alert('Add to cart successfully')" class="add-to-cart">ADD TO CART</button>
      <hr>
      <p>${dataDetail.describe}</p>
      <p>SKU: ${dataDetail.SKU}</p>
      <p>Category: ${dataDetail.category}</p>
      <p>Tags: ${dataDetail.tags}</p>
      <p>Status: ${dataDetail.status}</p>
    </div>
  </div>
  `;

document.querySelector('.detail-grid')
  .innerHTML = content;
