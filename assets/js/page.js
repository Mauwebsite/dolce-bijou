// Obtener el elemento de la imagen por su ID
const imagen = document.getElementById('miImagen');

// Array con las rutas de las imágenes a mostrar
//const imagenes = ['/images/amor/amor-(1).jpg', 'amor-(2).jpg', 'amor-(3).jpg','amor-(4).jpg','amor-(5).jpg','amor-(6).jpg'];
const imagenes = ['images/amor/amor-(1).jpg','images/amor/amor-(2).jpg','images/amor/amor-(3).jpg','images/amor/amor-(4).jpg','images/amor/amor-(5).jpg','images/amor/amor-(6).jpg',]
// Índice para controlar la imagen actual
let indiceImagen = 0;

// Función para cambiar la imagen
function cambiarImagen() {
  // Incrementar el índice (si llega al final, vuelve al inicio)
  indiceImagen = (indiceImagen + 1) % imagenes.length;

  // Cambiar la fuente de la imagen
  imagen.src = imagenes[indiceImagen];
}

// Ejecutar la función cada 5 segundos (5000 milisegundos)
setInterval(cambiarImagen, 5000);