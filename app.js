const { argv } = process;
const { leerArchivo } = require('./funcionesDeTareas');
const funciones = require('./funcionesDeTareas');

const acciones = process.argv[2];
const titulo = process.argv[3];



switch (acciones) {
    case "listar":
        funciones.listar();
        break;
    case undefined:
        funciones.sinTexto();
        break;
    case "crear":
        let nuevaTarea = {
            titulo,
            estado: 'pendiente'
        };
        funciones.escribirJSON(nuevaTarea);
        funciones.guardarTarea(nuevaTarea);
        break;

    default:
        funciones.cualquierTexto();
        break;

}