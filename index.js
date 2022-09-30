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

let card = document.getElementById("contenedor");
let productos = [
  { img: "//simpducha.jpg", nombre: "Simpsons Ducha", precio: 4000, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { img: "//simpsillon.jpg", nombre: "Simpsons Sillón", precio: 4000, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { img: "//simpfamilia.jpg", nombre: "Simpsons Familia", precio: 4000, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { img: "//tefparis.jpg", nombre: "Paris Torre ", precio: 3750, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { img: "//tefsavon.jpg", nombre: "Savon de la Violette", precio: 3750, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { img: "//tefbici.jpg", nombre: "Bicicleta", precio: 3750, descripcion: "Cortina de baño tela teflonada. 180x180 cm" },
  { img: "//simexducha.jpg", nombre: "Simpsons Ducha Plástica", precio: 1450, descripcion: "Cortina de baño plástica extra gruesa" },
  { img: "//simexhom.jpg", nombre: "Simpsons Homero Plástica", precio: 1450, descripcion: "Cortina de baño plástica extra gruesa" },
  { img: "//simexfamilia.jpg", nombre: "Simpsons Familia Plástica", precio: 1450, descripcion: "Cortina de baño plástica extra gruesa" },
  { img: "//gansimp.jpg", nombre: "Ganchos The Simpsons", precio: 2250, descripcion: "12 ganchos de resina diseño The Simpsons" },
  { img: "//ganban.jpg", nombre: "Ganchos resina diseño bañera", precio: 1950, descripcion: "12 ganchos de resina diseño bañera" },
  { img: "//ganmet.jpg", nombre: "Ganchos metálicos roller", precio: 1200, descripcion: "12 unidaddes de ganchos metálicos roller" },
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
      <a href="#" class="btn btn-primary">Agregar al carrito</a>
      </div>
  </div>
  `;
  contenedor.append(item);
});

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