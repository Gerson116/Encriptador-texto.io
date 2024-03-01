function encript() {
    var palabra = document.getElementById("descifrado").value.toLowerCase();
    
    //Verificar si el textarea esta vacio
    if (palabra.trim() === ""){
        //Mostrar alerta si esta vacio
        alert("El campo de texto está vacío. Por favor, ingrese texto antes de encriptar.")
    }

    // Reemplazamos cada vocal con su respectiva secuencia de letras
    var descifrado = palabra.replace(/e/g, "enter");
    descifrado = descifrado.replace(/i/g, "imes");
    descifrado = descifrado.replace(/a/g, "ai");
    descifrado = descifrado.replace(/o/g, "ober");
    descifrado = descifrado.replace(/u/g, "ufat");

    document.getElementById("cifrado").value = descifrado;

   // Mostrar el botón de copiar
   var copyButton = document.querySelector(".copy");
   copyButton.style.display = "block";
}

var btn = document.querySelector(".cifrar"); // Agregamos el punto antes de "cifrar"
btn.onclick = encript;

function desencript() {
    var palabra = document.getElementById("descifrado").value.toLowerCase();

    //Verificar si el textarea esta vacio
    if (palabra.trim() === ""){
        //Mostrar alerta si esta vacio
        alert("El campo de texto está vacío. Por favor, ingrese texto antes de desencriptar.")
    }
    
    // Reemplazamos cada secuencia de letras con su vocal correspondiente
    var descifrado = palabra.replace(/ai/g, "a");
    descifrado = descifrado.replace(/enter/g, "e");
    descifrado = descifrado.replace(/imes/g, "i");
    descifrado = descifrado.replace(/ober/g, "o");
    descifrado = descifrado.replace(/ufat/g, "u");

    document.getElementById("cifrado").value = descifrado;

    // Mostrar el botón de copiar
   var copyButton = document.querySelector(".copy");
   copyButton.style.display = "block";    
}

var btn2 = document.querySelector(".descifrar"); // Agregamos el punto antes de "descifrar"
btn2.onclick = desencript;

function copiar(){
    var contenido = document.getElementById("cifrado"); // Selecciona el textarea con el id "cifrado"
    contenido.select();
    document.execCommand("copy");
}

var btn3 = document.querySelector(".copy");
btn3.onclick = copiar;