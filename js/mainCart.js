function loadItem() {
    loadCart();
    let table = document.getElementById("customers");
    table.innerHTML = "";
    table.insertAdjacentHTML("afterbegin", `<tr>
    <th>Image</th>
    <th>Title</th>
    <th>Quantity</th>
    <th>Price</th>
  </tr>`);
    for (let i = 0; i < cart.length; i++) {
        let img = "";
        for (let j = 0; j < products_aboutshoe.length; j++) {
            if (cart[i].name == products_aboutshoe[j].name) {
                img = products_aboutshoe[j].image[0];
                break;
            }

        }
        table.insertAdjacentHTML("beforeend", `<tr>
        <td class="img">${img}</td>
        <td>${cart[i].name}<span class="size">(${cart[i].size})</span></td>
        <td><button class="sub">-</button><span class="number">${cart[i].count}</span><button class="add">+</button></td>
        <td>${cart[i].price}
            <button class="delete-product">X</button>
        </td>
      </tr>`)

    }
    updateTotal();
    deleteItem();
}
loadItem();
function deleteItem(){
    for (let i = 0; i < cart.length; i++){
      document.getElementsByClassName("delete-product")[i].addEventListener("click",() => {
        removeItem(i);
        loadItem();
      });    
    }
}
function convertMoney(money){
    let a = money.split(" đ")[0];
    let b = a.split("");
    for (let i = 1; i < b.length; i+=3) {
        b.splice(i,1);
    }
    let result = "";
    for (let i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
    
}
function convertPrice(number) {
    let price = number.toString().split("").reverse()
    for (let i = 3; i < price.length; i++) {
        price.splice(i, 0, ',');
        i += 3
    }
    return price.reverse().join('');
}
function updateTotal(){
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let price = convertMoney(cart[i].price);
        total += price * cart[i].count;
    }
    document.getElementsByClassName("price")[0].innerHTML = `Total : ${convertPrice(total)} đ`;
}
var btn_add = document.getElementsByClassName("add");
var btn_sub = document.getElementsByClassName("sub");
for (let i = 0; i < btn_add.length; i++) {
    btn_add[i].addEventListener("click", () => {
        let value = document.getElementsByClassName("number")[i].innerHTML;
        value++;
        cart[i].count = value;
        document.getElementsByClassName("number")[i].innerHTML = value + "";
        updateTotal();
    });
    btn_sub[i].addEventListener("click", () => {
        let value = document.getElementsByClassName("number")[i].innerHTML;
        if(value > 1) {
            value--;
            cart[i].count = value;
            document.getElementsByClassName("number")[i].innerHTML = value + "";
        }
        updateTotal();
    });
}
document.getElementById("payment").addEventListener("click",() => {
    if(cart.length >= 1){
        clearCart();
        loadItem();
        alert("purchase successful");
    }else{
        alert("no product");
    }
})
