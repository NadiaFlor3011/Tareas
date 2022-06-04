const { argv } = process;
const funciones = require('./funcionesDeTareas');

const acciones = process.argv[2];


switch (acciones) {
    case "listar":
        funciones.listar();
        break;
    case undefined:
        funciones.sinTexto();
        break;
    default:
        funciones.cualquierTexto();
        break;
}