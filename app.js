const presentacionTextoEncriptado = document.getElementById("presentacion__texto__encriptado__mensaje__inicial");

// Función para mostrar el botón "Copiar"
function mostrarBotonCopiar() {
    document.getElementById('boton_copiar').style.display = 'block';
}

function botonEncriptar() {
    const txt = document.getElementById('texto__formulario').value.trim();   
    if  (txt){
        document.getElementById("presentacion__texto__encriptado__mensaje__inicial").style.display = "none";
        mostrarBotonCopiar();
        encriptar();        
    } else{
        resetPresentacionTextoEncriptado();
    }    
}

function botonDesencriptar() {
    const txt = document.getElementById('texto__formulario').value.trim();
    if  (txt){
        document.getElementById("presentacion__texto__encriptado__mensaje__inicial").style.display = "none";
        mostrarBotonCopiar();
        desencriptar(); 
    } else{
        resetPresentacionTextoEncriptado();
    }
}

function resetPresentacionTextoEncriptado(){
    presentacionTextoEncriptado.innerHTML = 
    `<img src="./assets/Muñeco.png" alt="">
    <div class="alerta_1">Ningún mensaje fue encontrado</div>
    <div class="alerta_2">Ingresa el texto que desees encriptar o desencriptar.</div>`;
    presentacionTextoEncriptado.style.display = 'block';
    document.getElementById('boton_copiar').style.display= 'none';
    document.getElementById('texto__encriptado').style.display= 'none';
}

function encriptar(){
    const x = document.getElementById('texto__formulario').value;   
    if  (validador(x)){
    document.getElementById('texto__formulario').value ='';         
    }else{
    const textoEncriptado = x
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    document.getElementById('texto__encriptado').innerHTML= textoEncriptado;
    document.getElementById('texto__encriptado').style.display = 'block';
   }    
}

function desencriptar(){
    const x = document.getElementById('texto__formulario').value;
    const textoEncriptado = x
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('texto__encriptado').innerHTML= textoEncriptado;
    document.getElementById('texto__encriptado').style.display = 'block';
}

function validador(cadena) {  
    const tieneMay= /[A-Z]/.test(cadena);
    const tieneAcento = /[áéíóúÁÉÍÓÚ]/.test(cadena);
    const tieneCaracterEspecial =  /[^a-z ñ \s]/.test(cadena);  
    return tieneMay||tieneAcento||tieneCaracterEspecial;
} 

function botonCopiar(){
    const textoEncriptado = document.getElementById('texto__encriptado').innerText;
    navigator.clipboard.writeText(textoEncriptado);
}