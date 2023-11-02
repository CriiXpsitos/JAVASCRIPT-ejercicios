// Clases

class Producto {
    constructor(nombre, precio, disponibilidad){
        this.nombre = nombre;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }
    formatearProducto(){
        return `Nombre del producto ${this.nombre}, Precio ${this.precio}`;
    }
    obtenerPrecioProducto(){
     console.log(`El precio de ${this.nombre} es $${this.precio}.`);
    }
}

//herencia 
class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn  

    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es el ${this.isbn}`;

    }  
} 

const libro = new Libro('JavaScript', 300, '9899329824')
console.log(libro.formatearProducto())


const producto2 = new Producto('Monitor curvo de 49', 800, true);
const producto3 = new Producto('Tablet', 300, false);

console.log(producto2.formatearProducto())

