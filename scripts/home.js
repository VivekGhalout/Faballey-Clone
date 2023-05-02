import { navbar, offerdiv, main_footer } from '../components/navbar.js'

let navbarContainer = document.getElementById('nav-header');
navbarContainer.innerHTML = navbar();

let offerContainer = document.getElementById('offer-nav');
offerContainer.innerHTML = offerdiv();

let footerContainer = document.getElementById(`main-footer`);
footerContainer.innerHTML = main_footer();

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