function mostrarVertical(cadena){
    for (let i = 0; i < cadena.length; i++) {
        console.log(cadena[i], i);
    }
    return cadena[1] + cadena[8] + cadena[13];
}

var cadena = mostrarVertical("¡Coding Dojo Chile!");
console.log(cadena);

// ************************************************
/*
¡
C
o
d
i
n
g

D
o
j
o

C
h
i
l
e
!
CDC
*/


function mezclar(cadena){
    var nuevaCadena = cadena
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] == "a"){
            nuevaCadena = remplazar(nuevaCadena, i, 4);
        } else if(cadena[i] == "e"){
            nuevaCadena = remplazar(nuevaCadena, i, 3);
        } else if(cadena[i] == "i"){
            nuevaCadena = remplazar(nuevaCadena, i, 1);
        } else if(cadena[i] == "o"){
            nuevaCadena = remplazar(nuevaCadena, i, 0);
        } else if(cadena[i] == "u"){
            nuevaCadena = remplazar(nuevaCadena, i, 7);
        } 
    }
    console.log(nuevaCadena);
}

function remplazar(cadena, posicion, valor){
    var nuevaCadena = cadena.replace(cadena[posicion], valor);
    return nuevaCadena;
}

mezclar("¡Coding Dojo Chile - Me Gusta!");

// ¡C0d1ng D0j0 Ch1l3 - M3 G7st4!