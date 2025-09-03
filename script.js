// daftar produk dengan gambar
const products = [
    { id: 1, name: 'sari gandum', price: 2000, img: 'img/sari.jpg' },
    { id: 2, name: 'nextar', price: 2000, img: 'img/nextar.jpg' },
    { id: 3, name: 'gerry', price: 2000, img: 'img/gery.jpg' },
    { id: 4, name: 'dilan waffle', price: 2000, img: 'img/waffle.jpg' },
    { id: 5, name: 'biskuit', price: 1000, img: 'img/biskuit.jpeg' }
];

let cart = [];

// fungsi untuk menampilkan daftar produk
function displayProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
           <img src="${product.img}" alt="${product.name}">
           <h3>${product.name}</h3>
           <p>Rp ${product.price}</p>
           <button onclick="addToCart(${product.id})">Tambah ke keranjang</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// fungsi untuk menambahkan produk ke keranjang
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// fungsi untuk menampilkan isi keranjang belanja
function updateCart() {
    const cartItemContainer = document.getElementById('cart-items');
    cartItemContainer.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x ${item.quantity} - Rp ${item.price * item.quantity}`;
        cartItemContainer.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = `Rp${totalPrice}`;
}

// panggil fungsi display saat halaman dimuat
window.onload = displayProducts;
