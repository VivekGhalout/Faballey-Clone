import {navbar, offerdiv, main_footer} from '../components/navbar.js'

let navbarContainer = document.getElementById('nav-header');
navbarContainer.innerHTML = navbar();

let offerContainer = document.getElementById('offer-nav');
offerContainer.innerHTML = offerdiv();

let footerContainer = document.getElementById(`main-footer`);
footerContainer.innerHTML = main_footer();