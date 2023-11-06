const usuarioAutenticado = new Promise ( (resolve, reject) => {
    const auth = true;

    if(auth){
        resolve("usuario autenticado"); // el promise se cumple
    } else {
        reject("No se pudo iniciar secion"); // el promise no se cumple
    }
})

usuarioAutenticado
    .then((resultado) => console.log (resultado))
    .catch((error) =>console.log(error));

// en los promises existen 3 valores 
//pending: No se ha cumplido pero no se ha rechazado
//fulfilled: se ha cumplido
// reject se ha rechazado

