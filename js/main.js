

/* variable "cargar", para determinar que cards aparecen en pantalla
1 -- las cards del 01 al 10
2 -- las cards del 11 al 20
3 -- las cards del 20 al 30

Para probar están activadas todas las cards, en 1!

*/
let cargar = 1;

if (cargar == 1) {

/* 1 */

const agregaProducto = document.createElement('div');

agregaProducto.innerHTML =  ` <div class="item">
<div class="titulo-item">Perro Callejero - Malbec</div>
<div> <img src="./imagenes/1.png" alt="" class="img-item"> </div>
<div class="precio-item"> $6.240 </div>
<button class="boton-item">Agregar al Carrito</button>
</div> `;

const elementoContenedor = document.querySelector('.contenedor');

elementoContenedor.appendChild(agregaProducto);


/* 2 */

const agregaProducto2 = document.createElement('div');

agregaProducto2.innerHTML =  ` <div class="item">
<div class="titulo-item">Killka - Malbec</div>
<div class="box-imagen"> <img src="./imagenes/2.png" alt="" class="img-item"> </div>
<div class="precio-item"> $5.220 </div>
<button class="boton-item">Agregar al Carrito</button>
</div> `;

const elementoContenedor2 = document.querySelector('.contenedor');

elementoContenedor2.appendChild(agregaProducto2);


/* 3 */

const agregaProducto3 = document.createElement('div');

agregaProducto3.innerHTML = ` <div class="item">
<div class="titulo-item">Santa Julia - Malbec</div>
<div class="box-imagen"> <img src="./imagenes/3.png" alt="" class="img-item"> </div>
<div class="precio-item"> $2.850  </div>
<button class="boton-item">Agregar al Carrito</button>
</div>`;

const elementoContenedor3 = document.querySelector('.contenedor');

elementoContenedor3.appendChild(agregaProducto3);


/* 4 */

const agregaProducto4 = document.createElement('div');

agregaProducto4.innerHTML = `<div class="item">
<div class="titulo-item">La Linda - Malbec</div>
<div class="box-imagen"> <img src="./imagenes/4.png" alt="" class="img-item"> </div>
<div class="precio-item"> $6.200 </div>
<button class="boton-item">Agregar al Carrito</button>
</div> `;

const elementoContenedor4 = document.querySelector('.contenedor');

elementoContenedor4.appendChild(agregaProducto4);


/* 5 */

const agregaProducto5 = document.createElement('div');

agregaProducto5.innerHTML = `<div class="item">
<div class="titulo-item">Escorihuela Gascón - Malbec</div>
<div class="box-imagen"> <img src="./imagenes/5.png" alt="" class="img-item"> </div>
<div class="precio-item"> $7.490 </div>
<button class="boton-item">Agregar al Carrito</button>
</div> `;

const elementoContenedor5 = document.querySelector('.contenedor');

elementoContenedor5.appendChild(agregaProducto5);


/* 6 */

const agregaProducto6 = document.createElement('div');

agregaProducto6.innerHTML = `<div class="item">
<div class="titulo-item"> Luigi Bosca - Malbec  </div>
<div class="box-imagen"> <img src="./imagenes/6.png" alt="" class="img-item"> </div>
<div class="precio-item"> $9.270 </div>
<button class="boton-item">Agregar al Carrito</button>
</div> `;

const elementoContenedor6 = document.querySelector('.contenedor');

elementoContenedor6.appendChild(agregaProducto6);


/* 7 */

const agregaProducto7 = document.createElement('div');

agregaProducto7.innerHTML = `<div class="item">
<div class="titulo-item"> Trumpeter - Malbec  </div>
<div class="box-imagen"> <img src="./imagenes/7.png" alt="" class="img-item"> </div>
<div class="precio-item"> $7.800 </div>
<button class="boton-item">Agregar al Carrito</button>
</div> `;

const elementoContenedor7 = document.querySelector('.contenedor');

elementoContenedor7.appendChild(agregaProducto7);


/* 8 */

const agregaProducto8 = document.createElement('div');

agregaProducto8.innerHTML = `<div class="item">
<div class="titulo-item"> Salentein - Reserva Malbec  </div>
<div class="box-imagen"> <img src="./imagenes/8.png" alt="" class="img-item"> </div>
<div class="precio-item"> $7.390 </div>
<button class="boton-item">Agregar al Carrito</button>
</div> `;

const elementoContenedor8 = document.querySelector('.contenedor');

elementoContenedor8.appendChild(agregaProducto8);


/* 9 */

const agregaProducto9 = document.createElement('div');

agregaProducto9.innerHTML = `<div class="item">
<div class="titulo-item"> Cafayate - Malbec  </div>
<div class="box-imagen"> <img src="./imagenes/9.png" alt="" class="img-item"> </div>
<div class="precio-item"> $2.590  </div>
<button class="boton-item">Agregar al Carrito</button>
</div> `;

const elementoContenedor9 = document.querySelector('.contenedor');

elementoContenedor9.appendChild(agregaProducto9);


/* 10 */

const agregaProducto10 = document.createElement('div');

agregaProducto10.innerHTML = `<div class="item">
<div class="titulo-item"> Animal - Malbec Organico  </div>
<div class="box-imagen"> <img src="./imagenes/10.png" alt="" class="img-item"> </div>
<div class="precio-item"> $7.990   </div>
<button class="boton-item">Agregar al Carrito</button>
</div>`;

const elementoContenedor10 = document.querySelector('.contenedor');

elementoContenedor10.appendChild(agregaProducto10);

} 


if (cargar == 1) {

    /* 11 */
    
    const agregaProducto11 = document.createElement('div');
    
    agregaProducto11.innerHTML = ` <div class="item">
    <div class="titulo-item"> Latitud 33 - Malbec  </div>
    <div class="box-imagen"> <img src="./imagenes/11.png" alt="" class="img-item"> </div>
    <div class="precio-item"> $4.240    </div>
    <button class="boton-item">Agregar al Carrito</button>
    </div> `;
    
    const elementoContenedor11 = document.querySelector('.contenedor');
    
    elementoContenedor11.appendChild(agregaProducto11);
    
    
    /* 12 */
    
    const agregaProducto12 = document.createElement('div');
    
    agregaProducto12.innerHTML =  ` <div class="item">
    <div class="titulo-item"> Chañarmuyo - Malbec  </div>
    <div class="box-imagen"> <img src="./imagenes/12.png" alt="" class="img-item"> </div>
    <div class="precio-item"> $8.900   </div>
    <button class="boton-item">Agregar al Carrito</button>
    </div>`;
    
    const elementoContenedor12 = document.querySelector('.contenedor');
    
    elementoContenedor12.appendChild(agregaProducto12);
    
    
    /* 13 */
    
    const agregaProducto13 = document.createElement('div');
    
    agregaProducto13.innerHTML = ` <div class="item">
    <div class="titulo-item"> Alta Vista - Estate Premium Malbec  </div>
    <div class="box-imagen"> <img src="./imagenes/13.png" alt="" class="img-item"> </div>
    <div class="precio-item"> $9.890   </div>
    <button class="boton-item">Agregar al Carrito</button>
    </div>` ;
    
    const elementoContenedor13 = document.querySelector('.contenedor');
    
    elementoContenedor13.appendChild(agregaProducto13);
    
    
    /* 14 */
    
    const agregaProducto14 = document.createElement('div');
    
    agregaProducto14.innerHTML =  ` <div class="item">
    <div class="titulo-item"> Saint Felicien - Malbec  </div>
    <div class="box-imagen"> <img src="./imagenes/14.png" alt="" class="img-item"> </div>
    <div class="precio-item"> $9.390   </div>
    <button class="boton-item">Agregar al Carrito</button>
    </div> ` ;
    
    const elementoContenedor14 = document.querySelector('.contenedor');
    
    elementoContenedor14.appendChild(agregaProducto14);
    
    
    /* 15 */
    
    const agregaProducto15 = document.createElement('div');
    
    agregaProducto15.innerHTML = ` <div class="item">
    <div class="titulo-item"> Altos del Plata - Malbec  </div>
    <div class="box-imagen"> <img src="./imagenes/15.png" alt="" class="img-item"> </div>
    <div class="precio-item"> $4.495    </div>
    <button class="boton-item">Agregar al Carrito</button>
    </div>` ;
    
    const elementoContenedor15 = document.querySelector('.contenedor');
    
    elementoContenedor15.appendChild(agregaProducto15);
    
    
    /* 16 */
    
    const agregaProducto16 = document.createElement('div');
    
    agregaProducto16.innerHTML = `<div class="item">
    <div class="titulo-item"> Zuccardi Q - Malbec  </div>
    <div class="box-imagen"> <img src="./imagenes/16.png" alt="" class="img-item"> </div>
    <div class="precio-item"> $12.800   </div>
    <button class="boton-item">Agregar al Carrito</button>
    </div> `;
    
    const elementoContenedor16 = document.querySelector('.contenedor');
    
    elementoContenedor16.appendChild(agregaProducto16);
    
    
    /* 17 */
    
    const agregaProducto17 = document.createElement('div');
    
    agregaProducto17.innerHTML = ` <div class="item">
    <div class="titulo-item"> Rutini - Malbec  </div>
    <div class="box-imagen"> <img src="./imagenes/17.png" alt="" class="img-item"> </div>
    <div class="precio-item"> $19.990   </div>
    <button class="boton-item">Agregar al Carrito</button>
    </div>`;
    
    const elementoContenedor17 = document.querySelector('.contenedor');
    
    elementoContenedor17.appendChild(agregaProducto17);
    
    
    /* 18 */
    
    const agregaProducto18 = document.createElement('div');
    
    agregaProducto18.innerHTML = ` <div class="item">
    <div class="titulo-item"> Padrillos - Malbec  </div>
    <div class="box-imagen"> <img src="./imagenes/18.png" alt="" class="img-item"> </div>
    <div class="precio-item"> $5.390    </div>
    <button class="boton-item">Agregar al Carrito</button>
    </div> ` ;
    
    const elementoContenedor18 = document.querySelector('.contenedor');
    
    elementoContenedor18.appendChild(agregaProducto18);
    
    
    /* 19 */
    
    const agregaProducto19 = document.createElement('div');
    
    agregaProducto19.innerHTML = `<div class="item">
    <div class="titulo-item"> Luigi Bosca De Sangre Malbec Valle de Uco  </div>
    <div class="box-imagen"> <img src="./imagenes/19.png" alt="" class="img-item"> </div>
    <div class="precio-item"> $14.950    </div>
    <button class="boton-item">Agregar al Carrito</button>
    </div> `;
    
    const elementoContenedor19 = document.querySelector('.contenedor');
    
    elementoContenedor19.appendChild(agregaProducto19);
    
    
    /* 20 */
    
    const agregaProducto20 = document.createElement('div');
    
    agregaProducto20.innerHTML = ` <div class="item">
    <div class="titulo-item"> Emilia Dulce Natural Malbec Rosé  </div>
    <div class="box-imagen"> <img src="./imagenes/20.png" alt="" class="img-item"> </div>
    <div class="precio-item"> $3.990    </div>
    <button class="boton-item">Agregar al Carrito</button>
    </div>`;
    
    const elementoContenedor20 = document.querySelector('.contenedor');
    
    elementoContenedor20.appendChild(agregaProducto20);
    
}


if (cargar == 1) {

        /* 21 */
        
        const agregaProducto21 = document.createElement('div');
        
        agregaProducto21.innerHTML = ` <div class="item">
        <div class="titulo-item"> La Linda - Chardonnay  </div>
        <div class="box-imagen"> <img src="./imagenes/21.png" alt="" class="img-item"> </div>
        <div class="precio-item"> $6.200    </div>
        <button class="boton-item">Agregar al Carrito</button>
        </div>`;
        
        const elementoContenedor21 = document.querySelector('.contenedor');
        
        elementoContenedor21.appendChild(agregaProducto21);
        
        
        /* 22 */
        
        const agregaProducto22 = document.createElement('div');
        
        agregaProducto22.innerHTML = ` <div class="item">
        <div class="titulo-item"> Luigi Bosca - Chardonnay  </div>
        <div class="box-imagen"> <img src="./imagenes/22.png" alt="" class="img-item"> </div>
        <div class="precio-item"> $9.280     </div>
        <button class="boton-item">Agregar al Carrito</button>
        </div>`;
        
        const elementoContenedor22 = document.querySelector('.contenedor');
        
        elementoContenedor22.appendChild(agregaProducto22);
        
        
        /* 23 */
        
        const agregaProducto23 = document.createElement('div');
        
        agregaProducto23.innerHTML = ` <div class="item">
        <div class="titulo-item"> Cafayate - Chardonnay  </div>
        <div class="box-imagen"> <img src="./imagenes/23.png" alt="" class="img-item"> </div>
        <div class="precio-item"> $2.590    </div>
        <button class="boton-item">Agregar al Carrito</button>
        </div>` ;
        
        const elementoContenedor23 = document.querySelector('.contenedor');
        
        elementoContenedor23.appendChild(agregaProducto23);
        
        
        /* 24 */
        
        const agregaProducto24 = document.createElement('div');
        
        agregaProducto24.innerHTML = ` <div class="item">
        <div class="titulo-item"> Cordero Con Piel De Lobo - Chardonnay  </div>
        <div class="box-imagen"> <img src="./imagenes/24.png" alt="" class="img-item"> </div>
        <div class="precio-item"> $4.360    </div>
        <button class="boton-item">Agregar al Carrito</button>
        </div>`;
        
        const elementoContenedor24 = document.querySelector('.contenedor');
        
        elementoContenedor24.appendChild(agregaProducto24);
        
        
        /* 25 */
        
        const agregaProducto25 = document.createElement('div');
        
        agregaProducto25.innerHTML = `<div class="item">
        <div class="titulo-item"> Salentein Reserva - Chardonnay  </div>
        <div class="box-imagen"> <img src="./imagenes/25.png" alt="" class="img-item"> </div>
        <div class="precio-item"> $7.390    </div>
        <button class="boton-item">Agregar al Carrito</button>
        </div> `;
        
        const elementoContenedor25 = document.querySelector('.contenedor');
        
        elementoContenedor25.appendChild(agregaProducto25);
        
        
        /* 26 */
        
        const agregaProducto26 = document.createElement('div');
        
        agregaProducto26.innerHTML = ` <div class="item">
        <div class="titulo-item"> Killka - Chardonnay  </div>
        <div class="box-imagen"> <img src="./imagenes/26.png" alt="" class="img-item"> </div>
        <div class="precio-item"> $5.220    </div>
        <button class="boton-item">Agregar al Carrito</button>
        </div>` ;
        
        const elementoContenedor26 = document.querySelector('.contenedor');
        
        elementoContenedor26.appendChild(agregaProducto26);
        
        
        /* 27 */
        
        const agregaProducto27 = document.createElement('div');
        
        agregaProducto27.innerHTML = ` <div class="item">
        <div class="titulo-item"> Develado - Chardonnay Sauvignon Blanc </div>
        <div class="box-imagen"> <img src="./imagenes/27.png" alt="" class="img-item"> </div>
        <div class="precio-item"> $8.500     </div>
        <button class="boton-item">Agregar al Carrito</button>
        </div>`;
        
        const elementoContenedor27 = document.querySelector('.contenedor');
        
        elementoContenedor27.appendChild(agregaProducto27);
        
        
        /* 28 */
        
        const agregaProducto28 = document.createElement('div');
        
        agregaProducto28.innerHTML = ` <div class="item">
        <div class="titulo-item"> Perro Callejero - Chardonnay  </div>
        <div class="box-imagen"> <img src="./imagenes/28.png" alt="" class="img-item"> </div>
        <div class="precio-item"> $6.240   </div>
        <button class="boton-item">Agregar al Carrito</button>
        </div>` ;
        
        const elementoContenedor28 = document.querySelector('.contenedor');
        
        elementoContenedor28.appendChild(agregaProducto28);
        
        
        /* 29 */
        
        const agregaProducto29 = document.createElement('div');
        
        agregaProducto29.innerHTML =  ` <div class="item">
        <div class="titulo-item"> La Linda Sweet Viognier  </div>
        <div class="box-imagen"> <img src="./imagenes/29.png" alt="" class="img-item"> </div>
        <div class="precio-item"> $6.200   </div>
        <button class="boton-item">Agregar al Carrito</button>
        </div> ` ;
        
        const elementoContenedor29 = document.querySelector('.contenedor');
        
        elementoContenedor29.appendChild(agregaProducto29);
        
        
        /* 30 */
        
        const agregaProducto30 = document.createElement('div');
        
        agregaProducto30.innerHTML =  ` <div class="item">
        <div class="titulo-item"> Emilia Dulce Natural Moscatel </div>
        <div class="box-imagen"> <img src="./imagenes/30.png" alt="" class="img-item"> </div>
        <div class="precio-item"> $3.990    </div>
        <button class="boton-item">Agregar al Carrito</button>
        </div>`;
        
        const elementoContenedor30 = document.querySelector('.contenedor');
        
        elementoContenedor30.appendChild(agregaProducto30);
        
}













