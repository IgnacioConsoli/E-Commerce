linea 28: este evento espera a que la página web se cargue por completo, luego captura el primer elemento "ul". 

linea 32: hice un fetch de los productos del json, para hacer un forEach de los productos y asi crear cada "li", "h3", "img"

linea 55: toLocalString ("es-AR") esta línea de código se encarga de mostrar el precio del producto con el símbolo de pesos utilizando el estilo de numeracion utilizado en argentina.

linea 58: se creo un boton con una clase y su indice sera su ID

linea 64: a ese mismo boton le agregue el evento "onclick" para que al apretarlo, todos los elementos con la clase "carrito oculto"  se oculten, luego creo una copia del producto selecionado lo pusheo y actualizo el contador del carrito 

linea 84: obtengo el elemento "ol" mediante su calse, para hacer un forEach de mi carrito y agregar un "li" por cada producto que haya en el carrito

linea 97: creo el boton de "ver mas" con una clase y un indice y le agrego el evento "onclick" para que al apretarlo me muestre los detalles del producto

linea 113: esta función crea un nuevo elemento "li" de productos en el carrito de compras, incluyendo su nombre, precio y un botón para eliminarlo.

linea 130: esta funcion busca el índice del producto en el array "carrito" basándose en el nombre del producto. Si lo encuentra y el indice es mayor a -1, lo elimina del carrito, actualiza el contador del carrito y muestra el carrito de compras nuevamente.

linea 143: esta linea de codigo lo que hace es ocultar o mostrar los elementos con la clase "carritoOculto" 

linea 159: esta linea lo que hace es pushear el precio de los productos al carrito y sumarlos para obtener un precio final

linea 164: hice un condicional para que cuando el carrito este vacio se cree una "p" que diga "carrito vacio", y si hay productos dentro, mostrar los poroductos

linea 178: cree un boton para simular una compra, al cliquearlo salta una alerta que dice "compra realizada con exito" y luego recargue la pagina nuevamente

linea 190: hice una funcion para que el contador del carrito se actualice a la cantidad de productos que hay en el carrito

linea 197: cree un funcion para que al apretar "ver mas" se creen los elementos "h2, p, button, img" y muestren los detalles del producto deseado


linea 232: creo un boton de agregar al carrito dentro de los detalles del producto, a ese boton le agrego la misma funcion ya creada anteriormente para agregar al carrito 
