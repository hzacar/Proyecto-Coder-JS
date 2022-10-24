/* class Producto{
    constructor(nombre, precio, descripcion){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}
let productos = [];
productos.push(new Producto("productoA", 20000, "descripcionA"))
productos.push(new Producto("productoB", 15000, "descripcionB"))
productos.push(new Producto("productoC", 19000, "descripcionC"))
 */

/* let cuotas = prompt("ELEGIR CANTIDAD DE CUOTAS");
let mensual = prompt("USTED VA A LLEVR EL PRODUCTO A, B O C?");
function cuota(mensual,cuotas){
return mensual/cuotas
}
switch(mensual){
    case "A":
        let resultadoa = cuota (productos[0].precio,cuotas).toFixed(2);
        alert (`DEBE ABONAR ${cuotas} CUOTAS MENSUALES DE $${resultadoa}`);
        break;
    case "B":
        let resultadob = cuota (productos[1].precio,cuotas).toFixed(2);
        alert (`DEBE ABONAR ${cuotas} CUOTAS MENSUALES DE $${resultadob}`);
        break;    
    case "C":
        let resultadoc = cuota (productos[2].precio,cuotas).toFixed(2);
        alert (`DEBE ABONAR ${cuotas} CUOTAS MENSUALES DE $${resultadoc}`);
        break;    
    
    default:
        alert ("ACTUALICE LA PAGINA E INGRESE A, B O C POR FAVOR");
        break;
} */
 
/* let card = document.getElementById("contenedor");
let productos = [
  { id: 1, img: "//simpducha.jpg", nombre: "Simpsons Ducha", precio: 4000, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { id: 2, img: "//simpsillon.jpg", nombre: "Simpsons Sillón", precio: 4000, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { id: 3, img: "//simpfamilia.jpg", nombre: "Simpsons Familia", precio: 4000, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { id: 4, img: "//tefparis.jpg", nombre: "Paris Torre ", precio: 3750, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { id: 5, img: "//tefsavon.jpg", nombre: "Savon de la Violette", precio: 3750, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { id: 6, img: "//tefbici.jpg", nombre: "Bicicleta", precio: 3750, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { id: 7, img: "//simexducha.jpg", nombre: "Simpsons Ducha Plástica", precio: 1450, descripcion: "Cortina de baño plástica extra gruesa" },
  { id: 8, img: "//simexhom.jpg", nombre: "Simpsons Homero Plástica", precio: 1450, descripcion: "Cortina de baño plástica extra gruesa" },
  { id: 9, img: "//simexfamilia.jpg", nombre: "Simpsons Familia Plástica", precio: 1450, descripcion: "Cortina de baño plástica extra gruesa" },
  { id: 10, img: "//gansimp.jpg", nombre: "Ganchos The Simpsons", precio: 2250, descripcion: "12 ganchos de resina diseño The Simpsons" },
  { id: 11, img: "//ganban.jpg", nombre: "Ganchos resina diseño bañera", precio: 1950, descripcion: "12 ganchos de resina diseño bañera" },
  { id: 12, img: "//ganmet.jpg", nombre: "Ganchos metálicos roller", precio: 1200, descripcion: "12 unidaddes de ganchos metálicos roller" },
];

productos.forEach((producto) => {
  let item = document.createElement("div");
  item.innerHTML= `
  <div class="card col-md-3 prod" style="width: 20rem;">
      <img src="img${producto.img}" class="card-img-top" alt="cortina de baño modelo simpson ducha">
      <div  class="card-body">
      <h3 class="card-title">$${producto.precio}</h3>
      <h4 class="card-subtitle">${producto.nombre}</h4>
      <p class="card-text">${producto.descripcion}</p>
      <a id="producto.id" href="#" class="btn btn-primary agregar-carrito">Agregar al carrito</a>
      </div>
  </div>
  `;
  contenedor.append(item);
}); */

/* let buscador = document.getElementById("buscador");
buscador.addEventListener("submit", (e) => {
  e.preventDefault();
  contenedor.innerHTML = "";
  let inputs = e.target.children;

  let producto = productos.find((item) => item.nombre === inputs[0].value);
  let div = document.createElement("div");
  div.innerHTML = `
    <div class="card col-md-3 prod" style="width: 20rem;">
        <img src="img${producto.img}" class="card-img-top" alt="cortina de baño modelo simpson ducha">
        <div  class="card-body">
        <h3 class="card-title">$${producto.precio}</h3>
        <h4 class="card-subtitle">${producto.nombre}</h4>
        <p class="card-text">${producto.descripcion}</p>
        <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
    </div>
  `;
    
  contenedor.append(div)
}); */
/* 
let buscador = document.getElementById("buscador");
buscador.addEventListener("submit", (e) => {
  e.preventDefault();
  contenedor.innerHTML = "";
  let inputs = e.target.children;

  let producto = productos.filter((item) => item.nombre.toLocaleLowerCase().includes (inputs[0].value));
  producto.forEach((producto) => {
    let item = document.createElement("div");
    item.innerHTML= `
    <div class="card col-md-3 prod" style="width: 20rem;">
        <img src="img${producto.img}" class="card-img-top" alt="cortina de baño modelo simpson ducha">
        <div  class="card-body">
        <h3 class="card-title">$${producto.precio}</h3>
        <h4 class="card-subtitle">${producto.nombre}</h4>
        <p class="card-text">${producto.descripcion}</p>
        <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
    </div>
    `;
    contenedor.append(item);
  });
});



let carrito = [];
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));


if(carritoStorage){
  carrito = carritoStorage;
}
carrito.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <div class="card col-md-3 prod" style="width: 20rem;">
      <img src="img${producto.img}" class="card-img-top" alt="cortina de baño modelo simpson ducha">
      <div  class="card-body">
      <h3 class="card-title">$${producto.precio}</h3>
      <h4 class="card-subtitle">${producto.nombre}</h4>
      <p class="card-text">${producto.descripcion}</p>
      <a href="#" class="btn btn-primary">Agregar al carrito</a>
      </div>
    </div>
    `;

  contenedor.append(div);
});

let boton = document.getElementById("producto.id");
boton.addEventListener("click", () => {
  Swal.fire({
    title: "Producto seleccionado",
    text: "Confirmas para que se agregue al carrito?",
    icon: "success",
    confirmButtonText: "Confirmar",
  });
});

const contenedorProductos = document.getElementById("contenedor");
contenedorProductos.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classlist.contains("agregar-carrito"))
  swal.fire({
    title: "Producto seleccionado",
    text: "Confirmas para que se agregue al carrito?",
    icon: "success",
    confirmButtonText: "Confirmar",
  })
})

 */

const card = document.getElementById("contenedor");
let productos = [
  {id: 1, img: "//simpducha.jpg", nombre: "Simpsons Ducha", precio: 4000, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  {id: 2, img: "//simpsillon.jpg", nombre: "Simpsons Sillón", precio: 4000, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  {id: 3, img: "//simpfamilia.jpg", nombre: "Simpsons Familia", precio: 4000, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  {id: 4, img: "//tefparis.jpg", nombre: "Paris Torre ", precio: 3750, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  {id: 5, img: "//tefsavon.jpg", nombre: "Savon de la Violette", precio: 3750, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  {id: 6, img: "//tefbici.jpg", nombre: "Bicicleta", precio: 3750, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  {id: 7, img: "//simexducha.jpg", nombre: "Simpsons Ducha Plástica", precio: 1450, descripcion: "Cortina de baño plástica extra gruesa" },
  {id: 8, img: "//simexhom.jpg", nombre: "Simpsons Homero Plástica", precio: 1450, descripcion: "Cortina de baño plástica extra gruesa" },
  {id: 9, img: "//simexfamilia.jpg", nombre: "Simpsons Familia Plástica", precio: 1450, descripcion: "Cortina de baño plástica extra gruesa" },
  {id: 10, img: "//gansimp.jpg", nombre: "Ganchos The Simpsons", precio: 2250, descripcion: "12 ganchos de resina diseño The Simpsons" },
  {id: 11, img: "//ganban.jpg", nombre: "Ganchos resina diseño bañera", precio: 1950, descripcion: "12 ganchos de resina diseño bañera" },
  {id: 12, img: "//ganmet.jpg", nombre: "Ganchos metálicos roller", precio: 1200, descripcion: "12 unidaddes de ganchos metálicos roller" },
];
let carrito = [];
productos.forEach((producto) => {
  const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
  <div class="card col-md-3 prod" style="width: 20rem;">
      <img src="img${producto.img}" class="card-img-top" alt="cortina de baño modelo simpson ducha">
      <div  class="card-body">
      <h3 class="card-title">$${producto.precio}</h3>
      <h4 class="card-subtitle">${producto.nombre}</h4>
      <p class="card-text">${producto.descripcion}</p>
      <a id="agregar${producto.id}" href="#" class="btn btn-primary agregar-carrito">Agregar al carrito</a>
      </div>
  </div>
  `;
  card.appendChild(div)
});

const contenedorProductos = document.getElementById('contenedor');
contenedorProductos.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.classList.contains('agregar-carrito')) {
		Swal.fire({
			title: 'Producto seleccionado',
			text: 'Confirmas para que se agregue al carrito?',
			icon: 'success',
      confirmButtonText: 'Confirmar'
		});
	}
});
 
let buscador = document.getElementById("buscador");
buscador.addEventListener("submit", (e) => {
  e.preventDefault();
  contenedor.innerHTML = "";
  let inputs = e.target.children;

  let producto = productos.filter((item) => item.nombre.toLocaleLowerCase().includes (inputs[0].value));
  producto.forEach((producto) => {
    let item = document.createElement("div");
    item.innerHTML= `
    <div class="card col-md-3 prod" style="width: 20rem;">
        <img src="img${producto.img}" class="card-img-top" alt="cortina de baño modelo simpson ducha">
        <div  class="card-body">
        <h3 class="card-title">$${producto.precio}</h3>
        <h4 class="card-subtitle">${producto.nombre}</h4>
        <p class="card-text">${producto.descripcion}</p>
        <a id="agregar${producto.id}" href="#" class="btn btn-primary agregar-carrito">Agregar al carrito</a>
        </div>
    </div>
    `;
    contenedor.append(item);
  });
});


const boton = document.getElementById('agregar${producto.id}')
   
    boton.addEventListener('click', () => {
        
        agregarAlCarrito(producto.id)
        
    })



const agregarAlCarrito = (prodId) => {
const item = productos.find( (prod) =>  prod.id === prodId)
carrito.push (item)

} 

// nuevo JS


/* document.addEventListener('DOMContentLoaded', e => {
  fetch("productos.json")
    .then(a => a.json())
    .then(jsonObject => renderizarProductos(jsonObject))

});


let carrito = []
function renderizarProductos(producto) {

const listaProductos = document.getElementById('contenedor');   
const cantColumn = 3;


//Filas
for (let i = 0; i < producto.length/cantColumn; i++) {
let fila = "";

//Columnas
let indiceInicial = i * cantColumn;
let htmlProducto = ""

for (let j = indiceInicial; j < producto.length && j < indiceInicial + cantColumn; j++) {
    

    htmlProducto = `
    <div class="card col-md-3 prod" style="width: 20rem;">
      <img src="img${producto[j].img}" class="card-img-top" alt="cortina de baño modelo simpson ducha">
      <div  class="card-body">
      <h3 class="card-title">$${producto[j].precio}</h3>
      <h4 class="card-subtitle">${producto[j].nombre}</h4>
      <p class="card-text">${producto[j].descripcion}</p>
      <a id= "agregar${producto[j].id}" href="#" class="btn btn-primary agregar-carrito">Agregar al carrito</a>
      </div>
    </div>
    `;

    fila += htmlProducto;
    
} //Fin FOR Columnas

let htmlRow = `<div class="row"> ${fila} </div>`

listaProductos.innerHTML += htmlRow; 

} // Fin FOR Filas

}

const boton = document.getElementById('agregar${producto[j].id}')

boton.addEventListener('click', () => {
  agregarAlCarrito(producto[j].id)
})


const contenedorProductos = document.getElementById('contenedor');
contenedorProductos.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.classList.contains('agregar-carrito')) {
		Swal.fire({
			title: 'Producto seleccionado',
			text: 'Confirmas para que se agregue al carrito?',
			icon: 'success',
			confirmButtonText: 'Confirmar'
		});
	}
});

const agregarAlCarrito = (prodId) => {
const item = renderizarProductos.find( (prod) =>  prod.id === prodId)
carrito.push (item)
console.log(carrito);
}  */

/* const buscador = document.getElementById('buscador');
buscador.addEventListener("submit", (e) => {
  e.preventDefault();
  contenedor.innerHTML = "";
  let inputs = e.target.children;

  let buscador = producto.filter((item) => item.nombre.toLocaleLowerCase().includes (inputs[0].value));
  buscador.forEach((producto) => {
    let item = document.createElement("div");
    item.innerHTML= `
    <div class="card col-md-3 prod" style="width: 20rem;">
      <img src="img${producto[j].img}" class="card-img-top" alt="cortina de baño modelo simpson ducha">
      <div  class="card-body">
      <h3 class="card-title">$${producto[j].precio}</h3>
      <h4 class="card-subtitle">${producto[j].nombre}</h4>
      <p class="card-text">${producto[j].descripcion}</p>
      <a href="#" class="btn btn-primary agregar-carrito">Agregar al carrito</a>
      </div>
    </div>
    `;
  console.log(buscador);

})

})
 */