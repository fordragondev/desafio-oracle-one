# Encriptador/Desencriptador de Texto

Este proyecto es una página web que permite encriptar y desencriptar texto utilizando una serie de reglas específicas. Está desarrollada con HTML, CSS y JavaScript, y fue creada como parte del desafío de encriptador de OracleOne.

## Funcionalidad

La página web ofrece las siguientes funcionalidades:

- **Encriptar Texto**: Convierte cada vocal del texto ingresado en una secuencia específica de caracteres.
- **Desencriptar Texto**: Restaura el texto encriptado a su forma original al reemplazar las secuencias de caracteres con las vocales correspondientes.
- **Copiar Texto**: Permite copiar el texto encriptado o desencriptado al portapapeles para un uso posterior.

### Reglas de Encriptación

- La letra `a` se convierte en `ai`
- La letra `e` se convierte en `enter`
- La letra `i` se convierte en `imes`
- La letra `o` se convierte en `ober`
- La letra `u` se convierte en `ufat`

### Reglas de Desencriptación

- La secuencia `ai` se convierte en `a`
- La secuencia `enter` se convierte en `e`
- La secuencia `imes` se convierte en `i`
- La secuencia `ober` se convierte en `o`
- La secuencia `ufat` se convierte en `u`

## Uso

1. **Ingreso de Texto**: El usuario debe ingresar el texto que desea encriptar o desencriptar en el área de texto provista. 
2. **Encriptar**: Al hacer clic en el botón "Encriptar", el texto será transformado según las reglas de encriptación.
3. **Desencriptar**: Al hacer clic en el botón "Desencriptar", el texto encriptado será restaurado a su forma original.
4. **Copiar**: El usuario puede copiar el resultado encriptado o desencriptado al portapapeles haciendo clic en el botón "Copiar".

## Requisitos

- El texto ingresado debe contener solo letras minúsculas y sin acentos.
- El texto no debe exceder los 300 caracteres.

## Archivos

- `index.html`: Contiene la estructura HTML de la página.
- `styles/style.css`: Contiene los estilos CSS para la página.
- `js/scripts.js`: Contiene las funciones JavaScript para encriptar, desencriptar y copiar el texto.

## Autor

**Andrés Echeverría**

Desarrollador de Software en Fordragon Dev Company.

