let sum = JSON.parse(localStorage.getItem("cartvalue"))

document.getElementById("sub-price").innerHTML  = "₹ " + sum;
document.getElementById("total-price").innerHTML  = "₹ " + sum;


let address = JSON.parse(localStorage.getItem("account-data"));

document.getElementById("name").innerHTML = address.name;
document.getElementById("address").innerHTML = address.address;
document.getElementById("country").innerHTML = "India-" + address.pin;
document.getElementById("mobile").innerHTML = "Mobile " + address.mobile;


document.getElementById("pay-now-btn").addEventListener("click", final)


function final() {
    let cardNo = document.getElementById("card-no").value;
    let cardName = document.getElementById("card-name").value;
    let mm = document.getElementById("mm").value;
    let yy = document.getElementById("yy").value;
    let cvv = document.getElementById("cvv").value;

    if(cardNo == "" || cardName == "" || mm == "" || yy == "" || cvv == "") {
        alert("Fill All Details!");
        return;
    }
    else if(cardNo.length < 16){
        alert("Wrong Card No!");
        return;
    } else {
        location.href = "../pages/success.html"
    }
}