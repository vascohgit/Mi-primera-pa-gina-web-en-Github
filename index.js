//encuentra el elemento botón mediante su ID
const miBoton = document.getElementById('miBoton');
//define la función que se ejecutará al hacer click
function handleClick() {
    alert('Hola! Haz hecho click en el botón');
} 
//Añadimos un eventlistener para escuchar cuando haga click en el botón
miBoton.addEventListener("click", function handleClick(){
    alert ('Qué tocás?'); 
});
