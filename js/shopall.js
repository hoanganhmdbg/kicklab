for (let i = 0; i < products_aboutshoe.length; i++) {
  let x = document.getElementById("list-of-products");
  x.insertAdjacentHTML('beforeend', `<div class="items">
     <div>${products_aboutshoe[i].image[0]}</div>
     <div class="name-of-shoes">${products_aboutshoe[i].name}</div>
     <div class="price-of-shoes">${products_aboutshoe[i].price}</div>
    </div>`)
}
var items = document.getElementsByClassName('items');
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    if (localStorage.getItem("user") == null) {
      window.location.pathname = "login.html";
    } else {
      localStorage.setItem("index", i);
      window.location.pathname = `product.html`;
    }
  })
}
