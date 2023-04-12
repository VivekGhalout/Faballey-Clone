import {navbar, offerdiv} from '../components/navbar.js'

let navbarContainer = document.getElementById('nav-header');
navbarContainer.innerHTML = navbar();

let offerContainer = document.getElementById('offer-nav');
offerContainer.innerHTML = offerdiv();

let apiUrl = `https://database-mi7j.onrender.com/tops`;

async function getData(apiUrl) {
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log(error)
    }
}
getData(apiUrl);

function displayData(data) {

    data.forEach(ele => {
        
        let proCard = document.createElement("div");
        proCard.setAttribute("id", "pro-card");

        let ancor = document.createElement("a");

        let proImg = document.createElement("img");
        proImg.src = ele.image_a;

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

        deleP.append(deleImg);
        deleP.innerHTML = "EXPRESS | ";

        let deleP2 = document.createElement("p");
        deleP2.innerHTML = "3 Day Delivery";

        delevDiv.append(deleP, deleP2);

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

        btnDiv.append(wishBtn, bagBtn);

        proCard.append(ancor, p, priceDiv, delevDiv, btnDiv);

        document.getElementById("top-images").append(proCard);
    });
}