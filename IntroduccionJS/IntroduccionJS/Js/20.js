// metodos de propiedad 

const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },

    crearPlaylist: function(nombre) {
        console.log(`Creando la Playslist ${nombre}`)
    },

    reproducirPlaylist: function(nombre) {
        console.log(`reproduciendo la playslist ${nombre}`)
    },

}

reproductor.borrarCancion = function(id) {
    console.log (`Eliminando la cancion ${id}`)
}

console.log(reproductor)

reproductor.reproducir(3840)
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Hevay Metal")
reproductor.reproducirPlaylist("Hevay Metal")