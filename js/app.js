const catalogo = async () => {
    try {
        const respuesta = await fetch("data/productos.json")
        return await respuesta.json()
    } catch (error) {
        console.error(error)
    }
}

// const verDetalle = function (evento){
//     console.log(evento.target)
// }

// const plantillaProducto = ({imagen,nombre,precio,descripcion}) => {
//     const producto = document.createElement("li")
//     const img = document.createElement("img")
//     img.src= imagen
//     producto.appendChild(img)
//     producto.innerHTML += `<h2> ${nombre}</h2><p>${precio}</p><p>${descripcion}</p>`
//     producto.addEventListener("click",verDetalle)
//     document.querySelector("#productos").appendChild(producto)
// }


// const mostrarProductos = productos => productos.forEach(producto => plantillaProducto (producto));

// catalogo().then(productos => {
//     mostrarProductos (productos)
// }).catch(error => console.error(error))
