import { navbar, offerdiv, main_footer } from '../components/navbar.js'

let navbarContainer = document.getElementById('nav-header');
navbarContainer.innerHTML = navbar();

let offerContainer = document.getElementById('offer-nav');
offerContainer.innerHTML = offerdiv();

let footerContainer = document.getElementById(`main-footer`);
footerContainer.innerHTML = main_footer();

let ele = JSON.parse(localStorage.getItem("iteam_details2"));
console.log(ele);

display_Pro(ele);

function display_Pro(ele) {
    document.getElementById("mid-div").innerHTML = "";

    let proDisDiv = document.createElement("div");
    proDisDiv.setAttribute("id", "pro-disc-div");

    //pro image side start code :-

    let proImgDiv = document.createElement("div");
    proImgDiv.setAttribute("id", "pro-img-div");

    let proImg1 = document.createElement("div");
    proImg1.setAttribute("id", "pro-img");
    let image_a = document.createElement("img");
    image_a.src = ele.image_a;
    proImg1.append(image_a);

    let proImg2 = document.createElement("div");
    proImg2.setAttribute("id", "pro-img");
    let image_b = document.createElement("img");
    image_b.src = ele.image_b;
    proImg2.append(image_b);

    let proImg3 = document.createElement("div");
    proImg3.setAttribute("id", "pro-img");
    let image_c = document.createElement("img");
    image_c.src = ele.image_c;
    proImg3.append(image_c);

    let proImg4 = document.createElement("div");
    proImg4.setAttribute("id", "pro-img");
    let image_d = document.createElement("img");
    image_d.src = ele.image_d;
    proImg4.append(image_d);

    proImgDiv.append(proImg1, proImg2, proImg3, proImg4);

    //pro details side code start:-

    let proDetailDiv = document.createElement("div");
    proDetailDiv.setAttribute("id", "pro-details-div");

    let proName = document.createElement("div");
    proName.setAttribute("id", "pro-name");
    let name = document.createElement("p");
    name.innerHTML = ele.pro_name;
    proName.append(name);

    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "price-div");

    let price = document.createElement("p");
    price.innerHTML = "₹" + ele.price;
    let strPrice = document.createElement("p");
    strPrice.innerHTML = "₹" + ele.strikeoffprice;
    let off = document.createElement("p");
    off.innerHTML = "(" + ele.off + "% OFF)";
    pricediv.append(price, strPrice, off);

    let tax = document.createElement("p");
    tax.innerHTML = "Inclusive of all taxes";

    let proId = document.createElement("p");
    proId.innerHTML = ele.order_id;

    let delevDiv = document.createElement("div");
    delevDiv.setAttribute("id", "delevery-div");

    let deleP = document.createElement("p");
    let deleImg = document.createElement("img");
    deleImg.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48cGF0aCBpZD0idHJ1Y2stZmFzdC1zb2xpZCIgZD0iTTUyOCwwYTQ4LjAxMiw0OC4wMTIsMCwwLDEsNDgsNDhWOTZoNDhhMTYsMTYsMCwwLDEsMCwzMkgzNjhhMTYsMTYsMCwwLDAsMCwzMkg1OTJhMTYsMTYsMCwwLDEsMCwzMkg0MDBhMTYsMTYsMCwwLDAsMCwzMkg2MjRhMTYsMTYsMCwwLDEsMCwzMkg0MzJhMTYsMTYsMCwxLDAsMCwzMkg1NzZWNDE2YTk2LDk2LDAsMCwxLTE5MiwwSDI1NmE5Niw5NiwwLDEsMS0xOTIsMEgzMmEzMiwzMiwwLDEsMSwwLTY0VjIzNy4zQTY0LjAyMiw2NC4wMjIsMCwwLDEsNTAuNywxOTJMMTI4LDExNC43QTY0LjAyMiw2NC4wMjIsMCwwLDEsMTczLjMsOTZIMjI0VjQ4QTQ4LjAxMiw0OC4wMTIsMCwwLDEsMjcyLDBaTTk2LDIzNy4zVjI1NkgyMjRWMTYwSDE3My4zWk00ODAsNDY0YTQ4LDQ4LDAsMSwwLTQ4LTQ4QTQ4LjAxMiw0OC4wMTIsMCwwLDAsNDgwLDQ2NFpNMTEyLDQxNmE0OCw0OCwwLDEsMCw0OC00OEE0OC4wMTIsNDguMDEyLDAsMCwwLDExMiw0MTZaIi8+PC9zdmc+"
    // deleP.append(deleImg);
    deleP.innerHTML = "EXPRESS | ";
    let deleP2 = document.createElement("p");
    deleP2.innerHTML = "3 Day Delivery";
    delevDiv.append(deleImg, deleP, deleP2);

    let sizeDiv1 = document.createElement("div");
    sizeDiv1.setAttribute("id", "size-div1");

    let p1 = document.createElement("p");
    p1.innerHTML = "SIZE:"
    let p2 = document.createElement("p");
    p2.innerHTML = "SIZE GUIDE";
    sizeDiv1.append(p1, p2);

    let sizeDiv2 = document.createElement("div");
    sizeDiv2.setAttribute("id", "size-div2");

    let xs = document.createElement("p");
    xs.innerHTML = "XS";
    let s = document.createElement("p");
    s.innerHTML = "S";
    let m = document.createElement("p");
    m.innerHTML = "M";
    let l = document.createElement("p");
    l.innerHTML = "L";
    let xl = document.createElement("p");
    xl.innerHTML = "XL";
    sizeDiv2.append(xs, s, m, l, xl);

    let btnDiv = document.createElement("div");
    btnDiv.setAttribute("id", "btn-div");

    let atcBtn = document.createElement("button");
    atcBtn.setAttribute("id", "atc-btn");
    atcBtn.textContent = "ADD TO CARD";
    atcBtn.addEventListener("click" , () => {
        addToCartFunc(ele)
    });

    let wishBtn = document.createElement("button");
    wishBtn.setAttribute("id", "wish-btn");
    let wishImg = document.createElement("img");
    wishImg.src = "https://img.icons8.com/windows/1x/like.png";
    wishBtn.append(wishImg);
    wishBtn.textContent = "ADD TO WISHLIST";
    btnDiv.append(atcBtn, wishBtn);

    var delev_opt = document.createElement("div");
    delev_opt.setAttribute("id", "delev_opt");

    var d_pincode = document.createElement("div");
    d_pincode.setAttribute("class", "d_pincode");
    var loc_img = document.createElement("img");
    loc_img.setAttribute("id", "loc_img")
    loc_img.setAttribute("src", "./icons/location.png")
    var address = document.createElement("p");
    address.setAttribute("id", "address");
    address.textContent = "Check Delivery Options ";
    var div = document.createElement("div");
    var pincode = document.createElement("input");
    pincode.setAttribute("id", "pincode");
    pincode.setAttribute("type", "text");
    pincode.setAttribute("placeholder", "Enter Pincode");
    pincode.setAttribute("tabindex", "10");
    var check = document.createElement("input");
    check.setAttribute("id", "check");
    check.setAttribute("type", "button");
    check.setAttribute("value", "Check");
    check.addEventListener("click", function () {
        pincodeFunc();
    });
    div.append(pincode, check);
    d_pincode.append(loc_img, address, div);
    delev_opt.append(d_pincode);

    let codDiv = document.createElement("div");
    codDiv.setAttribute("id", "cod-div");

    let codbtn = document.createElement("button");
    let codImg = document.createElement("img");
    codImg.src = "https://img.icons8.com/ios-filled/50/000000/receive-cash.png";
    codbtn.textContent = "COD Available";
    codbtn.append(codImg);
    

    let paybtn = document.createElement("button");
    let payImg = document.createElement("img");
    payImg.src = "https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/64/000000/external-secure-payment-online-banking-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto.png"
    paybtn.textContent = "Secure Payment";
    paybtn.append(payImg);

    let shipbtn = document.createElement("button");
    let shipImg = document.createElement("img");
    shipImg.src = "https://img.icons8.com/ios-filled/50/000000/delivery--v1.png";
    shipbtn.textContent = "Free Shipping";
    shipbtn.append(shipImg);
    codDiv.append(codbtn, paybtn, shipbtn);

    let discDiv1 = document.createElement("div");
    discDiv1.setAttribute("id", "disc-div");

    let discp1 = document.createElement("p");
    discp1.innerHTML = "Description";
    let discImg1 = document.createElement("img");
    discImg1.src = "https://img.icons8.com/ios/50/000000/expand-arrow--v1.png";
    discDiv1.append(discp1, discImg1);

    let discDiv2 = document.createElement("div");
    discDiv2.setAttribute("id", "disc-div");

    let discp2 = document.createElement("p");
    discp2.innerHTML = "Details";
    let discImg2 = document.createElement("img");
    discImg2.src = "https://img.icons8.com/ios/50/000000/expand-arrow--v1.png";
    discDiv2.append(discp2, discImg2);

    let discDiv3 = document.createElement("div");
    discDiv3.setAttribute("id", "disc-div");

    let discp3 = document.createElement("p");
    discp3.innerHTML = "Shipping & Returns";
    let discImg3 = document.createElement("img");
    discImg3.src = "https://img.icons8.com/ios/50/000000/expand-arrow--v1.png";
    discDiv3.append(discp3, discImg3);

    let socialDiv = document.createElement("div");
    socialDiv.setAttribute("id", "social-icon");

    let whatsApp = document.createElement("img");
    whatsApp.src = "https://img.icons8.com/color/48/000000/whatsapp--v1.png";
    let insta = document.createElement("img");
    insta.src = "https://img.icons8.com/ios/50/000000/instagram-new--v1.png";
    let facebook = document.createElement("img");
    facebook.src = "https://img.icons8.com/fluency/48/000000/facebook-new.png";
    let printit = document.createElement("img");
    printit.src = "https://img.icons8.com/fluency/48/000000/pinterest.png";

    socialDiv.append(whatsApp, insta, facebook, printit);

    proDetailDiv.append(proName, pricediv, tax, proId, delevDiv, sizeDiv1, sizeDiv2, btnDiv, delev_opt, codDiv, discDiv1, discDiv2, discDiv3, socialDiv);

    proDisDiv.append(proImgDiv, proDetailDiv)

    document.getElementById("mid-div").append(proDisDiv)

}

display_Pro(ele);

let cartArr = JSON.parse(localStorage.getItem("toCart")) || [];

let checkCart = (data) => {
    let isExist = false
    cartArr.forEach(cIteams => {
        if(cIteams.id == data.id) {
            isExist = true
        }
    })
    return isExist;
}

let addToCartFunc = (ele) => {
    let atcbtn =  document.getElementById("atc-btn");
    console.log(checkCart(ele))
    if(checkCart(ele)) {
        ele.qty++;
        localStorage.setItem("toCart", JSON.stringify(cartArr))
        atcbtn.style.backgroundColor = "green";
        alert("Increased Item Quantity")
    }
    else {
        cartArr.push(ele)
        localStorage.setItem("toCart", JSON.stringify(cartArr))
        atcbtn.style.backgroundColor = "green";
        // alert("Item Added Successfully")
    }
}
async function pincodeFunc() {
    let pincode = document.getElementById('pincode').value;
    let res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    let data = await res.json();
    let address = document.getElementById('address');
    address.innerText = `${data[0].PostOffice[0].District},${data[0].PostOffice[0].Circle} ${"\n"}Your area is serviceable${"\n"}
    Delivery Within 2 Days${"\n"}Cash on Delivery available on orders above ₹499${"\n"}`;

}

document.getElementById("log").innerHTML = "Hi There.."
document.getElementById("sign").innerHTML = "";


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const hemnav = document.getElementById('hem-nav');

if (bar) {
    bar.addEventListener("click", () => {
        hemnav.classList.add('active');
    })
}

if (close) {
    close.addEventListener("click", () => {
        hemnav.classList.remove('active');
    })
}