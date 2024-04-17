//Importar los modulos globales node.js
const fs = require('fs');
const process = require('process');

// Utilizo el método fs.readFileSync() y almacena su contenido en una variable
const contenido = fs.readFileSync('ejemplo.txt', 'utf8');

//Mostrar contenido del obj process
console.log(process);

//Para separar el contenido del archivo en lineas y almacenar el resultado
const lineas = contenido.split('\n');
//Para contar el numero de elementos
const numLineas = lineas.length;
//Para separar en palabras
const palabras = contenido.split(/\s+/).filter(Boolean);
//Contar el número de elementos en la matriz y, por lo tanto, el número de palabras en el archivo
const numPalabras = palabras.length;
//Para contar el numero de caracteres en el archivo
const numCaracteres = contenido.length;

//Muestro los resultados en consola
console.log(`Número de líneas: ${numLineas}`);
console.log(`Número de palabras: ${numPalabras}`);
console.log(`Número de caracteres: ${numCaracteres}`);

