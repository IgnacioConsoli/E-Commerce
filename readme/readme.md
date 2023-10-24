                                             app.js:



linea 26: este evento espera a que la página web se cargue por completo, luego captura el primer elemento "ul". 

linea 30: hice un fetch de los productos del json, para hacer un forEach de los productos y asi crear cada "li", "h3", "img"

linea 53: toLocalString ("es-AR") esta línea de código se encarga de mostrar el precio del producto con el símbolo de pesos usando el estilo de numeracion utilizado en argentina.

linea 56: se creo un boton con una clase y su indice sera su ID

linea 62: a ese mismo boton le agregue el evento "onclick" para que al apretarlo, se haga una copia del producto,  se pushee la copia al local storage, se altualiza el contador y mediante un foreach obtengo el elemento "ol" para agregarle un "li" por cada producto en el carrito 


linea 92: creo el boton de "ver mas" con una clase y un indice y le agrego el evento "onclick" para que al apretarlo me muestre los detalles del producto

linea 110: la funcion verMas hace q al apretar el boton ver mas crea un "h2, p, img, boton" para mostrar los detalles del producto, tambien al apretar el boton agregar al carrito agrega el producto al carrito dentro de los detalles 



                                                      cart.js:

linea 4: funcion para cargar el carrito desde el "localStorage"

linea 14: funcion para cargar el carrito desde el "localStorage"

linea 19: funcion para eliminar todos los productos del carrito  

linea 31: funcion que comprueba si el producto ya existe en el carrito, si el producto ya existe, encuentra el elemento en el carrito y actualiza la cantidad, si el producto no existe, crea un nuevo elemento en el carrito. Tambien crea dos botones para disminuir y aumentar la cantidad de productos, ademas agrega un contador de cantidad

linea 87: esta funcion hace que cuando hay menos de un producto en el carrito elimina su li

linea 98: esta funcion lo que hace es: sumar los precios de los productos, mostrar una "p" que dice carrito vacio si no hay ningun producto dentro de el, crea un li con el precio total de la compra, crea un boton para finalizar la compra que devuelve una alerta q dice compra realizada con exito y vacia el carrito, y por ultimo crea un boton que al apretarlo se borran todos los productos dentro del carrito 

linea 155: esta funcion actualiza el contador del carrito y devuelve la longitud del carrito

linea 163 y 170: son dos funciones, 1 para aumentar la camntidad de productos aprentando el + y otra para disminuir la cantidad de productos apretando el -


