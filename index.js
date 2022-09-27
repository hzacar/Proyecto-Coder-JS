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
  { img: "//simpducha.jpg", nombre: "cortina ducha", precio: 1000, descripcion: "Cortina de baño tela teflonada" },
  { img: "//simpsillon.jpg", nombre: "cortina sillon", precio: 700, descripcion: "Cortina de baño tela teflonada" },
  { img: "//simpfamilia.jpg", nombre: "cortina familia", precio: 500, descripcion: "Cortina de baño tela teflonada" },
];

productos.forEach((producto) => {
  let item = document.createElement("div");
  item.innerHTML= `
  <div class="card col-md-3 prod" style="width: 18rem;">
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


{/* <h3>Id: ${producto.id}</h3>
    <h4>Producto: ${producto.nombre}</h4>
    <p>$${producto.precio}</p> */}