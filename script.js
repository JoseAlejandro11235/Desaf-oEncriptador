let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.querySelector("#desencriptar");

var enc = true;
var mensaje_encriptado = "";
var mensaje_desencriptado = "";

function encriptar(){

    var input = document.getElementById("texto-recibido");
    var texto = input.value;

    if (!texto) {
        return alert("No hay texto para encriptar");
    }
    if (texto.match(/^[a-z ]*$/)) {
        var texto_array = texto.split('');
    
        for (var i = 0; i < texto_array.length; i++ ){
            if (texto_array[i] == "e"){
                texto_array[i] = "enter";
            }

            if (texto_array[i] == "i"){
                texto_array[i] = "imes";
            }

            if (texto_array[i] == "a"){
                texto_array[i] = "ai";
            }

            if (texto_array[i] == "o"){
                texto_array[i] = "ober";
            }

            if (texto_array[i] == "u"){
                texto_array[i] = "ufat";
            }

            mensaje_encriptado += texto_array[i];
        }
        enc = true;
        input.value="";
    }else{
        return alert ("Solo letras minusculas y sin acentos.");
    }

   
    
    
}


function desencriptar(){
    var input = document.getElementById("texto-recibido");
    var texto = input.value;
    var texto_array = texto.split('');
    for(var i= 0; i < texto_array.length; i++){
        var start = i + 1;
        
        if(texto_array[i] == "e"){
            texto_array.splice(start, 4);
        }

        if(texto_array[i] == "i"){
            texto_array.splice(start,3)
        }

        if(texto_array[i] == "a"){
            texto_array.splice(start,1)
        }
        
        if(texto_array[i] == "o"){
            texto_array.splice(start,3)
        }
    
        if(texto_array[i] == "u"){
            texto_array.splice(start,3)
        }

        console.log(texto_array[i]);
        mensaje_desencriptado += texto_array[i];
    }
    enc=false;
    input.value="";
}

var mostrar_texto = document.getElementById("mostrar-texto");

function quitar_aparecer(){
    if (enc==true){
        cambiar_pantalla();
        mostrar_texto.value = mensaje_encriptado;
        mensaje_encriptado="";
    }
    if(enc==false){
        cambiar_pantalla();
        mostrar_texto.value = mensaje_desencriptado;
        mensaje_desencriptado="";
    }

}

function cambiar_pantalla(){
    var mostrar_resultado = document.getElementById("mostrar-resultado");
    var seccion_devolver = document.getElementById("seccion-devolver");
    mostrar_resultado.style.display = 'block';
    seccion_devolver.style.display='none';
}

let botonCopiar = document.getElementById("boton-copiar");

function copiarTexto(){
    mostrar_texto.select();
    navigator.clipboard.writeText(mostrar_texto.value);
    mostrar_texto.value="";
  
}

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);

botonEncriptar.addEventListener("click", quitar_aparecer);
botonDesencriptar.addEventListener("click", quitar_aparecer);

botonCopiar.addEventListener("click", copiarTexto);