class Producto{
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


/* let productoA = 20000;
let productoB = 15000;
let productoC = 19000; */
let cuotas = prompt("ELEGIR CANTIDAD DE CUOTAS");
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
}
