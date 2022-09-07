let numero = parseInt(prompt("Adivina el número. Pista: es entre 1 y 4"));
let adivinar = 1
while (numero != 'ESC') {
    switch (numero) {
        case (numero = adivinar):
            alert (`¡¡Felicitaciones ${numero} es el número secreto!!`);
            break;
        case (numero = 3):
            alert (`${numero} no es el número secreto. Seguí intentando`);
            break;
        case (numero = 2):
            alert (`${numero} no es el número secreto. Seguí intentando`);
            break;
        case (numero = 4):
            alert (`${numero} no es el número secreto. Seguí intentando`);
            break;
        default:
            alert ("Fuera del rango")
    }
    numero = parseInt(prompt("Adivina el número. Pista: es entre 1 y 20"));
}



    
   
    /* let respuesta2 = `${respuesta} es un número inválido. Perdieste una oportunidad`;
    alert (respuesta2);
    else
    if(respuesta===17){ */
       /*  let ganador = `${respuesta} es el número correcto. Felicitaciones`
        console.log (ganador);
        break
    } */

/* alert ("fin") */