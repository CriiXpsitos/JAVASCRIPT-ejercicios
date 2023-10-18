"use strict";

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};



Object.freeze(producto); // no me deja agregar y modificar y eliminar nada
producto.imagen = "imagen.jpg"

console.log(Object.isFrozen(producto));

Object.seal(producto); // si me deja modificar las propiedades existentes