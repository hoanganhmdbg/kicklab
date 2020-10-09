
var index = localStorage.getItem("index");
var info = document.getElementsByClassName('info')[0];
info.getElementsByClassName('brand')[0].innerHTML = `${products_aboutshoe[index].brand}`;
info.getElementsByClassName('name')[0].innerHTML = `${products_aboutshoe[index].name}`;
info.getElementsByClassName('price')[0].innerHTML = products_aboutshoe[index].price;
var sizes = document.getElementById('sizes');
sizes.innerHTML = "";
sizes.insertAdjacentHTML("beforeend", `<option>Choose your size</option>`);
for (let j = 0; j < products_aboutshoe[index].size.length; j++) {
    sizes.insertAdjacentHTML("beforeend", `<option value="${products_aboutshoe[index].size[j]}">${products_aboutshoe[index].size[j]}</option>`);
}
let img = document.getElementsByClassName("img")[0];
img.innerHTML = "";
for (let i = 0; i < products_aboutshoe[index].image.length; i++) {
    img.insertAdjacentHTML("beforeend", `${products_aboutshoe[index].image[i]}`);
}
document.getElementById("add-to-cart").addEventListener("click", () => {
    let size = document.getElementById("sizes");
    let sizeChoose = size.options[size.selectedIndex].value;
    console.log(sizeChoose);
    if (sizeChoose == "Choose your size") {
        alert("choose your size");
        return;
    }
    addItemToCart(products_aboutshoe[index].name, products_aboutshoe[index].price, sizeChoose);
    alert("add successful");
    window.location.pathname = "kicklabpt/index.html";
});
