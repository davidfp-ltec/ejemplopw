
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto} añadido al carrito.`);
}

function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (lista) {
        lista.innerHTML = '';
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            lista.appendChild(li);
        });
    }
}

window.onload = actualizarCarrito;
