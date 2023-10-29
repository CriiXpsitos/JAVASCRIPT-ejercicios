//estrucutras de control

// if (condicion) {
    //   //codigo a ejecutar si la condicion es verdadera
    // } else {
        // codigo a ejecutar si la condicion es falsa


const puntaje = 1000; 

if(puntaje ==1000) {
    console.log("si el puntaje es 1000")
}

else {
    console.log("no es 1000");
}

// si el puntaje es 1000 se le suma automaticamente un 1 al puntaje

const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito){
    console.log("el usuario puede pagar")
}
else{
    console.log("el usuario no tiene suficiente dinero para comprar")
}


const rol = "ADMINISTRADOR";

if(rol === "ADMINISTRADOR"){
    cpnsole.log("Acceso a todo el sistema");
}else if(rol ==="EDITOR"){
    console.log("Eres editor, peuedes entrar pero no puedes hacer mucho")
}else{
    console.log("No tienes acceso al sistema")
} 
;
