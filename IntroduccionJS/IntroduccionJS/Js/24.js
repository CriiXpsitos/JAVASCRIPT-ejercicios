// for loops
// for(let i = 0; i <= 10; i++) {
//     console.log(`El numero es ${i}`);
// }
for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(`El numero es par ${i}`);
    }else{
        console.log(`El numero es impar ${i}`);
    }
}

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


for (let i = 0; i <= carrito.length; i++ ) {
    console.log(carrito[i].nombre);
    console.log(carrito[i].precio);
}



// while loops

//dowhile loops