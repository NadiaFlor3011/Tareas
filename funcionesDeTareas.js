const tareas = require('./tareas.json');
const fs = require('fs');
const archivoTareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'))

module.exports = {
    leerArchivo: () => {
        archivoTareas;
    },
    listar: () => {

        tareas.forEach((tarea, index) => {
            console.log(`(${index + 1}). ${tarea.titulo} - ${tarea.estado}`)
        })



    },
    sinTexto: () => {
        console.log(`
        -------------------------------------
        Atención-Tienes que pasar una acción.
        Las acciones disponibles son : Listar
        -------------------------------------
        `);
    },
    cualquierTexto: () => {
        console.log(`
        ---------------------------------------
        No entiendo qué quieres hacer.
         Las acciones disponibles son : Listar
        ---------------------------------------`);
    },
    escribirJson: function(tarea) {
        archivoTareas.push(tarea);

        fs.writeFileSync('./tareas.json', JSON.stringify(archivoTareas, null, 3));
    }




}