// POO

/**objet literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor 
function Producto(nombre, precio, disponibilidad){
    this.nombre= nombre;
    this.precio = precio;
    this.disponibilidad=disponibilidad

}

const producto2 = new Producto('Monitor curvo de 49', 800, true);
const producto3 = new Producto('Tablet', 300, false);


function formatearProducto(){
    return `Nombre del producto ${producto2.nombre}, Precio ${producto2.precio}`;
}
console.log(producto2)
console.log(producto3)

console.log(producto2.formatearProducto())

// Crear funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto = function(){
    return `Nombre del producto ${this.nombre}, Precio ${this.precio}`;
}