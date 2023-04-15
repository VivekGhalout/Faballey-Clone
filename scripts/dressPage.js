import { navbar, offerdiv, main_footer } from '../components/navbar.js'

let navbarContainer = document.getElementById('nav-header');
navbarContainer.innerHTML = navbar();

let offerContainer = document.getElementById('offer-nav');
offerContainer.innerHTML = offerdiv();

let footerContainer = document.getElementById(`main-footer`);
footerContainer.innerHTML = main_footer();

let page = 1;

async function getData() {

    let apiUrl = `https://database-mi7j.onrender.com/dresses?_page=${page}&_limit=12`;
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data);
        displayData(data);
        document.getElementById("page-no").innerHTML = page + "...";
    } catch (error) {
        console.log(error)
    }
}
getData();

function displayData(data) {

    document.getElementById("top-images").innerHTML = "";

    data.forEach(ele => {

        let proCard = document.createElement("div");
        proCard.setAttribute("id", "pro-card");

        let ancor = document.createElement("a");

        let proImg = document.createElement("img");
        proImg.src = ele.image_a;
        proImg.addEventListener("click", function() {
            pro_discrip(ele);
        })

        ancor.append(proImg);

        let p = document.createElement("p");
        p.innerHTML = ele.pro_name;

        let priceDiv = document.createElement("div");
        priceDiv.setAttribute("id", "price-div");

        let price = document.createElement("p");
        price.innerHTML = "₹ " + ele.price;

        let strPrice = document.createElement("p");
        strPrice.innerHTML = "₹ " + ele.strikeoffprice;

        priceDiv.append(price, strPrice);

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

        let btnDiv = document.createElement("div");
        btnDiv.setAttribute("id", "btn-div");

        let wishBtn = document.createElement("button");
        wishBtn.setAttribute("id", "wish-btn");

        let wishImg = document.createElement("img");
        wishImg.src = "https://img.icons8.com/windows/1x/like.png";

        wishBtn.append(wishImg);

        let bagBtn = document.createElement("button");
        bagBtn.setAttribute("id", "bag-btn");
        bagBtn.textContent = "ADD TO BAG";
        bagBtn.addEventListener("click" , () => {
            addToCartFunc(ele)
        });

        btnDiv.append(wishBtn, bagBtn);

        proCard.append(ancor, p, priceDiv, delevDiv, btnDiv);

        document.getElementById("top-images").append(proCard);
    });
}

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
    // let bagBtn =  document.getElementById("bag-btn");
    console.log(checkCart(ele))
    if(checkCart(ele)) {
        ele.qty++;
        localStorage.setItem("toCart", JSON.stringify(cartArr))
        // bagBtn.style.backgroundColor = "green";
        alert("Increased Item Quantity")
    }
    else {
        cartArr.push(ele)
        localStorage.setItem("toCart", JSON.stringify(cartArr))
        // bagBtn.style.backgroundColor = "green";
        alert("Item Added Successfully")
    }
}

let previous = () => {

    if (page === 1) {
        document.getElementById("previous").disabled = true;
        return;
    }
    page--;
    getData();
}

let next = () => {

    if (page === 2) {
        document.getElementById("next").disabled = true;
        return;
    }
    page++;
    getData();
}

document.getElementById("previous").addEventListener("click", previous);
document.getElementById("next").addEventListener("click", next);

let sortData = async () => {
    let sortValue = document.getElementById("filter").value;
    // console.log(sortValue)
    if (sortValue === "Name") {
        let apiUrl2 = `https://database-mi7j.onrender.com/dresses?_sort=pro_name&_order=asc&_limit=12`;
        try {
            let response = await fetch(apiUrl2);
            let data = await response.json();
            console.log(data);
            displayData(data);
        } catch (error) {
            console.log(error)
        }
    }
    else if (sortValue === "htl") {
        let apiUrl2 = `https://database-mi7j.onrender.com/dresses?_sort=price&_order=desc&_limit=12`;
        try {
            let response = await fetch(apiUrl2);
            let data = await response.json();
            console.log(data);
            displayData(data);
        } catch (error) {
            console.log(error)
        }
    }
    else if (sortValue === "lth") {
        let apiUrl2 = `https://database-mi7j.onrender.com/dresses?_sort=price&_order=asc&_limit=12`;
        try {
            let response = await fetch(apiUrl2);
            let data = await response.json();
            console.log(data);
            displayData(data);
        } catch (error) {
            console.log(error)
        }
    }
    else if (sortValue === "Discount") {
        let apiUrl2 = `https://database-mi7j.onrender.com/dresses?_sort=off&_order=desc&_limit=12`;
        try {
            let response = await fetch(apiUrl2);
            let data = await response.json();
            console.log(data);
            displayData(data);
        } catch (error) {
            console.log(error)
        }
    }
    else if (sortValue === "New Arrivals") {
        let apiUrl2 = `https://database-mi7j.onrender.com/dresses?_sort=id&_order=desc&_limit=12`;
        try {
            let response = await fetch(apiUrl2);
            let data = await response.json();
            console.log(data);
            displayData(data);
        } catch (error) {
            console.log(error)
        }
    }
    else if (sortValue === "") {
        getData();
    }


}


document.getElementById("filter").addEventListener("change", sortData)

var details = JSON.parse(localStorage.getItem("iteam_details2"));

if(details.length === 0) {
    localStorage.setItem("iteam_details2", JSON.stringify(details));
}

function pro_discrip(ele) {
    localStorage.setItem("iteam_details2", JSON.stringify(ele));
    location.href = "../pages/proDiscription.html";
}


document.getElementById("log").innerHTML = "Hi There.."
document.getElementById("sign").innerHTML = "";
