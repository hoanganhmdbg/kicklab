document.getElementById("shoppall").addEventListener("click", () => {
  window.location.pathname = "kicklabpt/allproduct.html";
})
function setUser() {
  var user_name = localStorage.getItem("user");
  if (user_name == null) {
    document.getElementById("user_name").innerHTML = "";
    document.getElementById("home_logout").style.display = "none";
    document.getElementById("home_login").style.display = "block";
    localStorage.removeItem("shoppingCart");
  } else {
    document.getElementById("home_logout").style.display = "block";
    document.getElementById("user_name").innerHTML = user_name;
    document.getElementById("home_login").style.display = "none";
  }
}
setUser();
document.getElementById("home_login").addEventListener("click", () => {
  window.location.pathname = "kicklabpt/login.html";
});
document.getElementById("home_logout").addEventListener("click", () => {
  localStorage.removeItem("user");
  clearCart();
  header_shopcart();
  setUser();
})

var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
for (let i = 0; i < 8; i++) {
  let x = document.getElementById("list-of-products");
  x.insertAdjacentHTML('beforeend', `<div class="items">
 <div>${products_aboutshoe[i].image[0]}</div>
 <div class="name-of-shoes">${products_aboutshoe[i].name}</div> 
 <div class="price-of-shoes">${products_aboutshoe[i].price}</div>
</div>`)
}

document.getElementById("click-search").addEventListener("click" , () => {
  let search = document.getElementById("search").value;
  let arr = [];
  for (let i = 0; i < products_aboutshoe.length; i++) {
    if(products_aboutshoe[i].name.includes(search)){
      arr.push(i);
    }
  }
  if(arr.length == 0){
    alert(`not found`);
  }else{
    localStorage.setItem("indexsearch",JSON.stringify(arr));
    window.location.pathname = "kicklabpt/search.html";
  }
});
var items = document.getElementsByClassName('items');
console.log(items);

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    if (localStorage.getItem("user") == null) {
      window.location.pathname = "kicklabpt/login.html";
    } else {
      localStorage.setItem("index", i);
      window.location.pathname = `kicklabpt/product.html`;
    }

  })
}

function header_shopcart() {
  let hascart = document.getElementsByClassName('hascart')[0];
  loadCart();
  console.log(cart);
  if (cart == null || cart.length < 1) {
    hascart.innerHTML = "No Product";
  } else {
    hascart.innerHTML = "";
    hascart.insertAdjacentHTML("beforeend", `<h4 class="hascart-heading">All Product</h4>`);
    for (let i = 0; i < cart.length; i++) {
      let img = "";
      for (let j = 0; j < products_aboutshoe.length; j++) {
        if (cart[i].name == products_aboutshoe[j].name) {
          img = products_aboutshoe[j].image[0];
          break;
        }

      }
      hascart.insertAdjacentHTML("beforeend", `<div class="hascart-product">
       ${img} 
       <span class="name">${cart[i].name}</span>
       <div class="hascart-right">
           <span class="price">${cart[i].price}</span>
           <button class="btn-delete">Delete</button>
       </div>
   </div>  `);

    }
    hascart.insertAdjacentHTML("beforeend", `<button id="view">View Cart</button>`);
  }
  deleteItem();
}
header_shopcart();
function deleteItem() {
  for (let i = 0; i < cart.length; i++) {
    document.getElementsByClassName("btn-delete")[i].addEventListener("click", () => {
      console.log(i);
      removeItem(i);
      header_shopcart();
    });

  }
}
document.getElementById("view").addEventListener("click", () => {
  window.location.pathname = "kicklabpt/cart.html";
});
var user_name = localStorage.getItem("user");
console.log(user_name);

