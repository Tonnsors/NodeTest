var config = require("./config");
var Db = require("mysql");

let connection = Db.createConnection(config);
async function getLibros(){
    let data;
    //data = connection.query("INSERT INTO libros2 (idlibros2,titulo,autor,publicacion,editorial) values (6,'libro6','juan','marzo2004','publicadora2')");
    data=connection.query("SELECT * FROM libros2");
    return data;
}
async function addLibros(libro){
    let data = connection.query("INTERT INTO libros2 (idlibros2,titulo,autor,publicacion,editorial) values (" + 
    libro.idlibros2 + "," + libro.titulo + "," + libro.autor + "," + libro.publicacion + "," + libro.editorial + ")");
}

module.exports = {
    getLibros : getLibros,
    addLibros : addLibros
}