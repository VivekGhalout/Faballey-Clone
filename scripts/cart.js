let data = JSON.parse(localStorage.getItem("toCart"))
console.log(data)

function selectCart(data) {
    if (data == null || data.length == 0) {
        document.getElementById("middle-div").style.display = "block"

        document.getElementById("cart-item-div").style.display = "none"
    }
    else {
        document.getElementById("cart-item-div").style.display = "flex"
        document.getElementById("middle-div").style.display = "none"
    }
}
selectCart(data)

showData(data);

function showData(data) {
    document.getElementById("my-card").innerHTML = "";
    document.getElementById("item-qty").innerHTML = data.length;

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
        let size_p = document.createElement("p");
        size_p.innerHTML = "Size: " + ele.size;
        let color_p = document.createElement("p");
        color_p.innerHTML = "Colour: " + ele.colour;
        let sku_p = document.createElement("p");
        sku_p.innerHTML = "SKU CODE: " + ele.order_id;
        //+//
        let div = document.createElement("div");
        let edit_p = document.createElement("p");
        edit_p.innerHTML = "Edit Item";
        let move_p = document.createElement("p");
        move_p.innerHTML = "Move to Wishlist";
        div.append(edit_p, move_p);
        cart_pro_detail.append(name_p, size_p, color_p, sku_p, div);

        let cart_pro_price = document.createElement("div");
        cart_pro_price.setAttribute("id", "cart-pro-price");

        let pri_div = document.createElement("div");
        let main_p = document.createElement("p");
        main_p.innerHTML = "₹" + ele.price * ele.qty;
        let str_p = document.createElement("p");
        str_p.innerHTML = "₹" + ele.strikeoffprice * ele.qty;
        str_p.style.textDecoration = "line-through"
        str_p.style.color = "#7e7d7d"
        pri_div.append(main_p, str_p);
        //+//
        let qty_inc_div = document.createElement("div");
        let minus_img = document.createElement("img");
        minus_img.src = "https://www.1mg.com/images/minus-cart.svg";
        minus_img.addEventListener("click", () => {
            decrease(ele, index)
        })
        minus_img.style.cursor = "pointer"
        let qty_p = document.createElement("p");
        qty_p.innerHTML = ele.qty;
        let plus_img = document.createElement("img");
        plus_img.src = "https://www.1mg.com/images/plus-cart.svg"
        plus_img.addEventListener("click", () => {
            increase(ele, index)
        })
        plus_img.style.cursor = "pointer"
        qty_inc_div.append(minus_img, qty_p, plus_img);
        //+//
        let delete_div = document.createElement("div");
        let delete_img = document.createElement("img");
        delete_img.src = "https://img.1mg.com/images/delete_icon.svg";
        delete_img.style.cursor = "pointer";
        delete_img.addEventListener("click", () => {
            removeme(ele, index)
        })
        delete_div.append(delete_img);
        cart_pro_price.append(pri_div, qty_inc_div, delete_div);

        cart_prod_div.append(cart_pro_img, cart_pro_detail, cart_pro_price);

        document.getElementById("my-card").append(cart_prod_div);
    });

}

function increase(ele, index) {
    console.log(data[index])
    data[index].qty++;
    showData(data)
    localStorage.setItem("toCart", JSON.stringify(data))
    totalamount(data)
}

function decrease(ele, index) {
    if (ele.qty == 1) {
        removeme(ele, index)
    }
    else {
        data[index].qty--;
        totalamount(data)
        localStorage.setItem("toCart", JSON.stringify(data))
        showData(data)
    }
}

function removeme(ele, index) {
    data.splice(index, 1)
    localStorage.setItem("toCart", JSON.stringify(data))
    showData(data)
    totalamount(data)
    selectCart(data)
}

let sum = 0;
function totalamount(data) {
    sum = data.reduce((accumulator, ele) => {
        return accumulator + ele.price * ele.qty
    }, 0)
    document.getElementById("total-price-1").innerHTML = `₹${sum}`
    document.getElementById("total-price-2").innerHTML = `₹${sum}`

}
totalamount(data)

document.getElementById("promo-submit").addEventListener("click", check)

function check() {

    var ch = document.getElementById("promo").value;
    if (ch == "masai30" || ch == "ghalout30") {
        alert("30% off applied");
        //  document.getElementById("Offer").append(temp);
        sum = sum - ((sum * 3) / 10);
        document.getElementById("total-price-1").innerHTML = `₹${sum}`
        document.getElementById("total-price-2").innerHTML = `₹${sum}`
        localStorage.setItem("cartvalue", sum);
        document.getElementById("promo").value = "";
    }
    
    

}