/* Elementos para la tienda */

const vinos = [
    "1.png","2.png","3.png","4.png","5.png",
    "6.png","7.png","8.png","9.png","10.png",
    "11.png","12.png","13.png","14.png","15.png",
    "16.png","17.png","18.png","19.png","20.png",
    "21.png","22.png","23.png","24.png","25.png",
    "26.png","27.png","28.png","29.png","30.png"
];

vinos.forEach( elemento =>{
    const Productos = document.createElement('div'); 
    const tiendaProductos = document.querySelector('.contenedor');

    fetch('./datosVinos.txt')
        .then(rep => rep.text())
        .then( data => {
            console.log(data); 
        })

    Productos.innerHTML = ` <div class="item">
    <div class="titulo-item">Perro Callejero - Malbec</div>
    <div> <img src="./imagenes/${elemento}" alt="" class="img-item"> </div>
    <div class="precio-item"> $6.240 </div>
    <button class="boton-item">Agregar al Carrito</button>
    </div> `;  

    tiendaProductos.appendChild(Productos);
})

var cont = 0; // Contador para los productos del carro;  

/* Validación del email */
const email = document.querySelector("#email"); 
let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; 
email.addEventListener('change', (event) =>{
    console.log(event.target.value);
    if (validarEmail.test(event.target.value)){
        /*alert("el email es valido");*/ 
        event.target.style.borderColor = 'green';
        event.target.style.color = 'green'; 
        event.target.style.border = '2px solid';    
    }else{
        /*alert("el email no es valido");*/
        event.target.style.borderColor = 'red'; 
        event.target.style.color = 'red'; 
        event.target.style.border = '2px solid';  
    }
})
/* Validación del nombre y apellido */
const name = document.querySelector("#name");
const lastname = document.querySelector("#lastname"); 

let validarText = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;  

name.addEventListener('change', (event) =>{
    console.log(event.target.value);
    if (validarText.test(event.target.value)){
        /*alert("el nombre es valido");*/ 
        event.target.style.borderColor = 'green';
        event.target.style.color = 'green'; 
        event.target.style.border = '2px solid';    
    }else{
        /*alert("el nombre no es valido");*/
        event.target.style.borderColor = 'red'; 
        event.target.style.color = 'red'; 
        event.target.style.border = '2px solid';  
    }
})

lastname.addEventListener('change', (event) =>{
    console.log(event.target.value);
    if (validarText.test(event.target.value)){
        /*alert("el apellido es valido");*/ 
        event.target.style.borderColor = 'green';
        event.target.style.color = 'green'; 
        event.target.style.border = '2px solid';    
    }else{
        /*alert("el apellido no es valido");*/
        event.target.style.borderColor = 'red'; 
        event.target.style.color = 'red'; 
        event.target.style.border = '2px solid';  
    }
})

/* Imagenes de la primera sección */ 
const prev = document.querySelector("#izq"); 
const next = document.querySelector("#der");
const infoVinos = document.querySelector('.info-vinos'); 
const containerImages = document.querySelector('.container-image');
const images = document.querySelectorAll('.container-image .item');
let count = images.length;
let active = 1; 
let leftTransform = 0; 
let width_images = images[active].offsetWidth; 

next.onclick = () =>{
    active = active >= count - 1 ? count -1 : active + 1; 
    runCarousel(); 
}
prev.onclick = () =>{
    active = active <= 0 ? 0 : active - 1;
    runCarousel();  
}
function runCarousel(){
    prev.style.visibility = active == 0 ? 'hidden' : 'visible'; 
    next.style.visibility = active == count -1 ? 'hidden' : 'visible'; 
    let old_active = document.querySelector('.item.active'); 
    
    if (old_active) old_active.classList.remove('active'); 
    images[active].classList.add('active'); 
    leftTransform = width_images * (active - 1) * -1; 
    containerImages.style.transform = `translateX(${leftTransform}px)`; 
    console.log(count, width_images, active); 
}
runCarousel();

/* Carrito */

/* Variable que mantiene el estado visible del carrito */
var carritoVisible = false;

/* Espermos que todos los elementos de la pàgina cargen para ejecutar el script */
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
    ocultarCarrito()
}else{
    ready();
}

function ready(){
    
    /* Agregremos funcionalidad a los botones eliminar del carrito */
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito);
    }

    /* Agrego funcionalidad al boton sumar cantidad */
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

     /* Agrego funcionalidad al buton restar cantidad */
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }

    /* Agregamos funcionalidad al boton Agregar al carrito */
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }

    /* Agregamos funcionalidad al botón comprar */
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
}

/* Eliminamos todos los elementos del carrito y lo ocultamos */
function pagarClicked(){
    alert("Gracias por la compra");
    /* Elimino todos los elmentos del carrito */
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();
    cont = 0; // reseteamos el contador para, dejarlo a cero cuando pagamos. 
    /* actualizamos la cantidad de producto dentro del carrito */ 
    document.getElementsByClassName('productos-carrito')[0].innerText = cont.toLocaleString("es"); 
}

/* Funciòn que controla el boton clickeado de agregar al carrito */
function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;

    agregarItemAlCarrito(titulo, precio, imagenSrc);

    /*hacerVisibleCarrito();  una vez agregado al carro superior hay que eleminarlo */
}

/* Funcion que hace visible el carrito */
function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    //var items =document.getElementsByClassName('contenedor')[0];
    //items.style.width = '60%'; // Deshabilitamos para que no mueva la tienda; 
}

/* Funciòn que agrega un item al carrito */
function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];
   

    /* controlamos que el item que intenta ingresar no se encuentre en el carrito */
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }
    // solo se suma si no existen duplicados de productos; 
    cont++;
    /* Agregamos la cantidad de producto dentro del carrito */ 
    document.getElementsByClassName('productos-carrito')[0].innerText = cont.toLocaleString("es"); 

    var itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    /* Agregamos la funcionalidad eliminar al nuevo item */
    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    /* Agregmos la funcionalidad restar cantidad del nuevo item*/
    var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click',restarCantidad);

    /* Agregamos la funcionalidad sumar cantidad del nuevo item */
    var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click',sumarCantidad);

    /* Actualizamos total */
    actualizarTotalCarrito();
}

/* Aumento en uno la cantidad del elemento seleccionado */
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}

/* Resto en uno la cantidad del elemento seleccionado */
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

/* Elimino el item seleccionado del carrito */
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    
    cont--; // contador que nos permite mantener el numero de productos en el nav del carrito; 
    /* actualizamos la cantidad de producto dentro del carrito */ 
    document.getElementsByClassName('productos-carrito')[0].innerText = cont.toLocaleString("es"); 
    /* Actualizamos el total del carrito */
    actualizarTotalCarrito();

    /* la siguiente funciòn controla si hay elementos en el carrito
    Si no hay elimino el carrito */
    //ocultarCarrito(); // quita la fución para que no elimine la vista. 
}

/* Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito. */
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    /*if(carritoItems.childElementCount==0){*/
    // se elimina el if para que se muestre el carro cuando se haga click sobre él;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '-100%';
    carrito.style.opacity = '0';
    carritoVisible = false;
    
    //var items =document.getElementsByClassName('contenedor')[0];
    //items.style.width = '100%'; // Deshabilitamos porque no se utiliza; 
    
    carritoVisible = false; 
}

/* Actualizamos el total de Carrito */
function actualizarTotalCarrito(){
    /* seleccionamos el contenedor carrito */
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;
    /* recorremos cada elemento del carrito para actualizar el total */
    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        /* quitamos el simobolo peso y el punto de milesimos. */
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));//replace('$','').replace('.',''))
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es");

}

/* Capturar el elemento del carro y al hacer click agregar el html */

const menuCarrito = document.querySelector("#tu-carrito"); 

menuCarrito.addEventListener("click", ()=>{

    if (carritoVisible == false){
        hacerVisibleCarrito();
        carritoVisible = true; 
    }else{
        ocultarCarrito();
    }

})








