//Variables
let textoInicial = '';
let textoEncriptado = '';
let textoDesencriptado = '';
let numeroMaximo = 300;

// Función para obtener el texto del textarea
function obtenerTextoDeTextarea() {
    let inputElement = document.querySelector('#inputText');
    let texto = inputElement.value;
    if (texto.length === 0) {
        alert('El campo está vacío. Por favor, ingresa texto.');
        return '';
    } else if (texto.length > numeroMaximo) {
        alert(`El texto debe tener menos de ${numeroMaximo} caracteres.`);
        return '';
    } else {
        return texto;
    }
}

// Función para encriptar el texto
function encriptarTexto() {
    console.log('encriptar');
    textoEncriptado = '';
    textoInicial = obtenerTextoDeTextarea();
    // Recorre cada caracter del texto
    for (let i = 0; i < textoInicial.length; i++) {
       if(textoInicial[i] === 'a')
       {
        textoEncriptado = textoEncriptado + 'ai';
       } 
       else if (textoInicial[i] === 'e' ) {
        textoEncriptado = textoEncriptado + 'enter';
       }
       else if (textoInicial[i] === 'i' ) {
        textoEncriptado = textoEncriptado + 'imes';
       }
       else if (textoInicial[i] === 'o' ) {
        textoEncriptado = textoEncriptado + 'ober';
       }
       else if (textoInicial[i] === 'u' ) {
        textoEncriptado = textoEncriptado + 'ufat';
       }
       else {
        textoEncriptado = textoEncriptado + textoInicial[i];
       }
    }
    // Muestra el botón de copiar
    document.getElementById('copyButton').style.display = 'block';
    let outputElement = document.querySelector('#outputText');
    outputElement.innerHTML = textoEncriptado;
    return;
}

// Función para desencriptar el texto
function desencriptarTexto() {
    console.log('desencriptar');
    textoDesencriptado = '';
    textoInicial = obtenerTextoDeTextarea();
    // Reemplaza las cadenas encriptadas con sus correspondientes caracteres originales
    textoDesencriptado = textoInicial.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    // Muestra el botón de copiar
    document.getElementById('copyButton').style.display = 'block';
    let outputElement = document.querySelector('#outputText');
    outputElement.innerHTML = textoDesencriptado;
    return;
}

// Función para copiar el texto al clipboard
function copiarTexto () {
    let outputText = document.querySelector('#outputText');
    let texto = outputText.innerHTML;
    if (texto.length === 0) {
        alert('Encripte o Desencripte primero un texto.');
    } else {
        let inputElement = document.querySelector('#inputText');
        inputElement.value= texto;
    }

    // Verifica los permisos del clipboard
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          /* write to the clipboard now */
          navigator.clipboard.writeText(texto).then(
            () => {
              /* clipboard successfully set */
              alert('Se ha copiado el texto al clickboard: ' + texto);
            },
            () => {
              /* clipboard write failed */
            },
          );
        }
      })

    return;
}

// Evento que se dispara cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const messageTextarea = document.getElementById('inputText');
    // Establece el número máximo de caracteres permitido
    messageTextarea.setAttribute('maxlength', numeroMaximo);
    return;
});
