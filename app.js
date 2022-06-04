const { argv } = process;
const { leerArchivo } = require('./funcionesDeTareas');
const funciones = require('./funcionesDeTareas');

const acciones = process.argv[2];
const titulo = process.argv[3];
const estado = process.argv[4];

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
    case "Crear":
        let nuevaTarea = archivoTareas.push({
            titulo,
            estado
        })
        acciones.escribirJson(nuevaTarea);
        break;
}