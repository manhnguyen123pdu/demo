const ProductImg = document.getElementsByTagName("img")
const ProductNameProduct = document.getElementsByClassName("product-nameProduct")
const ProductDiscount = document.getElementsByClassName("product-discount")
const ProductDiscountPrice = document.getElementsByClassName("product-price")

for (var i = 0; i < products.length; i++)
    {
    ProductImg[i].src = JSON.parse( localStorage.getItem(String(i)) ).img[0]
    ProductNameProduct[i].innerHTML = JSON.parse( localStorage.getItem(String(i)) ).nameProduct
    ProductDiscount[i].innerHTML = ("-"+JSON.parse( localStorage.getItem(String(i)) ).discount+"%")
    ProductDiscountPrice[i].innerHTML = "$"+JSON.parse( localStorage.getItem(String(i)) ).price
    }