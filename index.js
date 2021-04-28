let sectionArrivals = document.querySelector('.new-arrivals__products');
let sectionBrands = document.querySelector('#our-brands__photo');
let sectionProducts = document.querySelector('#products');


function addProducts() {
    return `
    <div class="a">
        <div id="product" class="d-flex align-items-center">
        <img src="./images/clock.png" alt="clock"></div>
        <span id="product__text">Louis XVI ATHOS</span>
        <br>
        <span id="product__text">165 000р.</span>
    </div>
    `
}

function addNewArrivals() {
    return `
    <div id="newArrivals">
        <div id="newArrivals__product">
        <img src="./images/clock.png" alt="clock">
        </div>
        <span id="newArrivals__text">Louis XVI ATHOS</span>
        <br>
        <span id="newArrivals__text">165 000р.</span>
    </div>
    `
};

function addBrands() {
    return `
    <div>
    <img src="./images/brand.png" alt="brand">
    </div>
    `
}

for (let i = 0; i < 8; i++) {
    if (i < 3) {
        sectionProducts.insertAdjacentHTML('beforeend', addProducts());
    }
    if (i < 4) {
        sectionBrands.insertAdjacentHTML('beforeend', addBrands());
    }
    sectionArrivals.insertAdjacentHTML('beforeend', addNewArrivals());;
}