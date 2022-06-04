const tareas = require('./tareas.json');
const fs = require('fs');
const archivoTareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'))

module.exports = {
    leerArchivo: function() {
        return archivoTareas;
    },
    listar: function() {

        tareas.forEach((tarea, index) => {
            console.log(`(${index + 1}). ${tarea.titulo} - ${tarea.estado}`)
        })



    },
    sinTexto: function() {
        console.log(`
        -------------------------------------
        Atención-Tienes que pasar una acción.
        Las acciones disponibles son : Listar
        -------------------------------------
        `);
    },
    cualquierTexto: function() {
        console.log(`
        ---------------------------------------
        No entiendo qué quieres hacer.
         Las acciones disponibles son : Listar
        ---------------------------------------`);
    },
    escribirJSON: function(array) {
        return JSON.stringify(fs.writeFileSync('./tareas.jason'))


    }
}