let titulo=document.getElementById("titulo")
console.log(titulo)

/*controlando etiquetas:
1-cambiar el texto de una etiqueta
solo aplica h1,P,A */
titulo.textContent="chao"

//el innertex es generico

//2- cambiar la imagen (o fuente)
let foto = document.getElementById("foto")
foto.src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Escudo_de_Atl%C3%A9tico_Nacional.png/640px-Escudo_de_Atl%C3%A9tico_Nacional.png"

/*3 modificar los estilos
- agregar o quitar clases  */

titulo.classList.add("letra")

//4. detectar funciones, funcion anonima es una funcion que no tiene nombre y se ejecuta una sola ves
let boton = document.getElementById("boton")

boton.addEventListener("click",function(){
    console.log("hice cli")
})