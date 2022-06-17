'use strict';

const cartCounterEl = document.querySelector('.cartCounter');
const itemButtonEl = document.querySelectorAll('.addToCart');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketTotalEl = document.querySelector('.basketTotal');
const basketEl = document.querySelector('.basket');

document.querySelector('.cartIconWrap').addEventListener('click', () =>
    document.querySelector('.basket').classList.toggle('hidden')
);

const cart = {};

itemButtonEl.forEach(button => button.addEventListener('click', event => {
    cartCounterEl.textContent++;
    const featuredItem = event.target.closest('.featuredItem');
    const id = featuredItem.dataset.id;
    const price = featuredItem.dataset.price;
    const name = featuredItem.dataset.name;
    addItem(id, name, price);
    basketTotalValueEl.textContent = priceItemCounter().toFixed(2);
    renderProduct(id);
}));

function addItem(id, name, price) {
    if (!(id in cart)) {
    cart[id] = {id, name, price, count: 0};
    }
    cart[id].count++;
}

function renderProduct(id){
    const basketRowEl = basketEl
        .querySelector(`.basketRow[data-productId="${id}"]`);
    if (!basketRowEl) {
        renderNewProduct(id);
        return;
    }
    basketRowEl.querySelector('.productCount').textContent = cart[id].count;
}

function renderNewProduct(productId){
    const itemInCart = `
    <div class="basketRow" data-productId="${productId}">
        <div>${cart[productId].name}</div>
        <div>
            <span class="productCount">${cart[productId].count}</span>
        </div>
        <div>$${cart[productId].price}</div>
        <div class="productTotalRow">
            ${cart[productId].price*cart[productId].count}
        </div>
    </div>
    `;
    basketTotalEl.insertAdjacentHTML('beforebegin', itemInCart);
}

function priceItemCounter() {
    return Object.values(cart)
        .reduce((sum, item) => sum + (item.price * item.count), 0);
}