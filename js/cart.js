let carrito = [];


function cargarCarritoDesdeLocalStorage() {
    const carritoJSON = localStorage.getItem('carrito');
    if (carritoJSON) {
    carrito = JSON.parse(carritoJSON);
    }

    actualizarContadorCarrito();
}


function guardarCarritoEnLocalStorage() {
const carritoJSON = JSON.stringify(carrito);
localStorage.setItem('carrito', carritoJSON);
}

function vaciarCarrito() {
carrito.length = 0;
actualizarContadorCarrito();
MostrarCarrito();
alert("Carrito vaciado");
guardarCarritoEnLocalStorage();

}




function crearElementoCarrito(producto) {
    
    const productoExistente = carrito.find((item) => item.nombre === producto.nombre);

    if (productoExistente) {
        
        const elementosCarrito = document.getElementsByClassName("olCarrito")[0].getElementsByTagName("li");
        for (let i = 0; i < elementosCarrito.length; i++) {
            const nombreProducto = elementosCarrito[i].textContent.split(" ($")[0];
            if (nombreProducto === producto.nombre) {
                
                const cantidadElement = elementosCarrito[i].getElementsByTagName("span")[0];
                const cantidadActual = parseInt(cantidadElement.textContent, 10);
                cantidadElement.textContent = cantidadActual;
                return;
            }
        }
    }


    const li = document.createElement("li");
    li.textContent = `${producto.nombre} ($${producto.precio})`;


    const aumentarBtn = document.createElement("button");
    aumentarBtn.textContent = "+";
    aumentarBtn.classList.add("aumentar");
    aumentarBtn.onclick = () => {
        aumentarCantidad(producto);
    };


    const disminuirBtn = document.createElement("button");
    disminuirBtn.textContent = "-";
    disminuirBtn.classList.add("disminuir");
    disminuirBtn.onclick = () => {
        disminuirCantidad(producto);
    };

    li.appendChild(disminuirBtn);
    

    
    const cantidadProducto = carrito.filter((item) => item.nombre === producto.nombre).length;
    const cantidadElement = document.createElement("span");
    cantidadElement.textContent = cantidadProducto;
    li.appendChild(cantidadElement);
    li.appendChild(aumentarBtn);

    const olCarrito = document.getElementsByClassName("olCarrito")[0];
    olCarrito.appendChild(li);
}




function eliminarDelCarrito(producto) {
    const productoIndex = carrito.findIndex((item) => item.nombre === producto.nombre);

    if (productoIndex !== -1) {
    carrito.splice(productoIndex, 1);
    actualizarContadorCarrito()
    guardarCarritoEnLocalStorage();
    MostrarCarrito();
    }
}

function MostrarCarrito() {
    console.log("MostrarCarrito() llamada");
    

    const olCarrito = document.getElementsByClassName("olCarrito")[0];

    olCarrito.innerHTML = "";

    const carritoMostrar = [];
    let precioTotal = 0;

    carrito.forEach((producto) => {
    carritoMostrar.push(producto);
    precioTotal += producto.precio;
    });

    if (carritoMostrar.length === 0) {
    const parrafoVacio = document.createElement("p");
    parrafoVacio.textContent = "(Carrito vacío)";
    olCarrito.appendChild(parrafoVacio);
    } else {
    carritoMostrar.forEach((producto) => {
        crearElementoCarrito(producto);
    });

    const liPrecioTotal = document.createElement("li");
    liPrecioTotal.textContent = `Precio Total: $${precioTotal}`;
    liPrecioTotal.className = "preciototal";
    olCarrito.appendChild(liPrecioTotal);

    const botonComprar = document.createElement("button");
    botonComprar.textContent = "Finalizar Compra";
    botonComprar.className = "finalizarCompra";
    botonComprar.onclick = finalizarCompra = () => {
        alert("Compra Realizada con éxito!");
        carrito.length = 0;
        actualizarContadorCarrito();
        guardarCarritoEnLocalStorage();
        MostrarCarrito();
    };
    olCarrito.appendChild(botonComprar);

    const botonVaciar = document.createElement("button");
    botonVaciar.textContent = "Vaciar carrito";
    botonVaciar.className = "vaciarCarrito";
    botonVaciar.onclick = vaciarCarrito = () => {
        carrito.length = 0; 
        actualizarContadorCarrito(); 
        MostrarCarrito(); 
        guardarCarritoEnLocalStorage();
        alert("Carrito vaciado"); 
    };
    olCarrito.appendChild(botonVaciar);
    }
}


function actualizarContadorCarrito() {
    const contadorElement = document.querySelector(".contador");
    if (contadorElement) {
    contadorElement.textContent = carrito.length.toString();
    }
}


function aumentarCantidad(producto) {
    carrito.push(producto);
    actualizarContadorCarrito();
    guardarCarritoEnLocalStorage();
    MostrarCarrito();
}

function disminuirCantidad(producto) {
    const productoIndex = carrito.findIndex((item) => item.nombre === producto.nombre);
    if (productoIndex !== -1) {
    carrito.splice(productoIndex, 1);
    actualizarContadorCarrito();
    guardarCarritoEnLocalStorage();
    MostrarCarrito();
    }
}


cargarCarritoDesdeLocalStorage();
MostrarCarrito();