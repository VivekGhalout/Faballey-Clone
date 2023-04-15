let data = JSON.parse(localStorage.getItem("toCart"))
console.log(data)

let sum = JSON.parse(localStorage.getItem("cartvalue"));
document.getElementById("sub-price").innerHTML = "₹ " + sum;
document.getElementById("total-price").innerHTML = "₹ " + sum;


showData(data);

function showData(data) {
    document.getElementById("my-card").innerHTML = "";

    data.forEach((ele, index) => {

        let cart_prod_div = document.createElement("div");
        cart_prod_div.setAttribute("id", "cart-prod-div");

        let cart_pro_img = document.createElement("div");
        cart_pro_img.setAttribute("id", "cart-pro-img");
        let pro_image = document.createElement("img");
        pro_image.src = ele.image_a;
        cart_pro_img.append(pro_image);

        let cart_pro_detail = document.createElement("div");
        cart_pro_detail.setAttribute("id", "cart-pro-detail");
        let name_p = document.createElement("p");
        name_p.innerHTML = ele.pro_name;
        let sku_p = document.createElement("p");
        sku_p.innerHTML = ele.order_id;
        let qty_p = document.createElement("p");
        qty_p.innerHTML = "Qty: " + ele.qty;
        let price_p = document.createElement("p");
        price_p.innerHTML = "Price: ₹" + ele.qty * ele.price;

        cart_pro_detail.append(name_p, sku_p, qty_p, price_p);

        cart_prod_div.append(cart_pro_img, cart_pro_detail);

        document.getElementById("my-card").append(cart_prod_div);
    });

}

document.getElementById("delev-btn").addEventListener("click", setData);

// let addressData = JSON.parse(localStorage.getItem("addressdata")) || [];

function setData() {
    let name = document.getElementById("name-input").value;
    let mobile = document.getElementById("mobile-input").value;
    let country = document.getElementById("country-input").value;
    let pin = document.getElementById("pin-input").value;
    let address = document.getElementById("address-input").value;

    if (name == "" || mobile == "" || country == "" || pin == "" || address == "") {
        alert("fill all the details*")
        return;
    } else {
        let addressOdj = {
            name: name,
            mobile: mobile,
            country: country,
            pin: pin,
            address: address
        };
        localStorage.setItem("account-data", JSON.stringify(addressOdj));
        location.href = "../pages/payment.html";
    }

}