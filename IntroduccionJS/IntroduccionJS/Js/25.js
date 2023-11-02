const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

//forEach (solo se puede ejecutar en arreglos)


carrito.forEach(producto => {
    console.log(producto.nombre)
}); // esta diseñado para iterar y mostrar en pantalla uso esto


//map


const arreglo2 = carrito.map(producto => `${producto.nombre} -- ${producto.precio} `); // esto es para crear un nuevo arreglo 

console.log(arreglo2)