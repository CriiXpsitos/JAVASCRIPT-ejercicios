//objetos 
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

console.log(producto);

// console.log(producto.nombreProducto);


// console.log(producto
//     ["nombreProducto", "precio", "disponible"]);

//agregar nuevas propiedades
producto.imagen = 'imagen.jpg';


//eliminar propiedades

delete producto.disponible;
