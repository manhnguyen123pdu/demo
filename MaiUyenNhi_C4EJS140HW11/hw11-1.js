let dataProduct = JSON.parse(localStorage.getItem('dataProduct'));

let content = '';

for(i = 0; i < dataProduct.length; i++) {
  if (dataProduct[i].nameProduct != '') {
    let randomIndex = Math.floor(Math.random() * dataProduct[i].img.length);
    let randomImg = dataProduct[i].img[randomIndex];

    let price = dataProduct[i].discount !=0 ? 
    `
      <del class="product-old-price">${Number(dataProduct[i].price.toLocaleString())}</del>
      <span class="product-discount-price">${Number(dataProduct[i].price.toLocaleString())*((100 - Number(dataProduct[i].discount))/100).toLocaleString()}</span>
    `:
    `
      ${Number(dataProduct[i].price.toLocaleString())}
    `;

    content +=
    `
      <div onclick="productDetail(${i})" class="product-container">
        <a href="hw11-1-page2.html" target="_blank">
          <img src="${randomImg}" alt="error">
          <div class="discount-rate">-${dataProduct[i].discount}%</div>
          <p class="product-name">${dataProduct[i].nameProduct}</p>
          <p>${price}</p>
        </a>
      </div>
    `
  }
}

document.querySelector('.grid-container')
  .innerHTML = content;

function productDetail(i) {
  localStorage.setItem('detailProduct', JSON.stringify(dataProduct[i]));
}