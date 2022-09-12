/* function impuesto(precio, porcentaje){
    return precio + ((precio * porcentaje)/100)
}
for (let index = 0; index < 5; index++) {
    let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO")),parseFloat(prompt("INGRESAR %")));
    alert(resultado);
} */
//filtro precios

let productoA = 20000;
let productoB = 15000;
let productoC = 19000;
let cuotas = prompt("ELEGIR CANTIDAD DE CUOTAS");
let precio = prompt("USTED VA A LLEVR EL PRODUCTO A, B O C?");
function cuota(precio,cuotas){
return precio/cuotas
}
switch(precio){
    case "A":
        let resultadoa = cuota (productoA,cuotas).toFixed(2);
        alert (`DEBE ABONAR ${cuotas} CUOTAS MENSUALES DE $${resultadoa}`);
        break;
    case "B":
        let resultadob = cuota (productoB,cuotas).toFixed(2);
        alert (`DEBE ABONAR ${cuotas} CUOTAS MENSUALES DE $${resultadob}`);
        break;    
    case "C":
        let resultadoc = cuota (productoC,cuotas).toFixed(2);
        alert (`DEBE ABONAR ${cuotas} CUOTAS MENSUALES DE $${resultadoc}`);
        break;    
    
    default:
        alert ("ACTUALICE LA PAGINA E INGRESE A, B O C POR FAVOR");
        break;
}
