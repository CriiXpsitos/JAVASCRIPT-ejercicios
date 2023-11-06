async function obtenerEmpleados() {

    const archivo = 'empleados.JSON'
    // fetch(archivo)
    // .then((resultado) => {
    //     return resultado.json();
    // })
    // .then (datos => {
    //     // console.log(datos.Empleados);

    //     const { Empleados } = datos;

    //     Empleados.forEach( (empleado) => {
    //         console.log(empleado)

    //     })
    // })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
    console.log(resultado)
}


obtenerEmpleados();