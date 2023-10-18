const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

const catalogo = {
    nombreProducto: "ropa bebe",
    precio: 500,
    disponible: true
}


//formar anterior 
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

//destructuring 

const {precio, nombreProducto} = producto; 
console.log(precio);