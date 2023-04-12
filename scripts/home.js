import {navbar, offerdiv} from '../components/navbar.js'

let navbarContainer = document.getElementById('nav-header');
navbarContainer.innerHTML = navbar();

let offerContainer = document.getElementById('offer-nav');
offerContainer.innerHTML = offerdiv();