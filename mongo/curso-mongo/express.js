var express = require('express');
var cn = require('./mongo/conexion');

var app = express();
var path = require('path');

app.use('/css', express.static('./node_modules/bootstrap/dist/css'));
app.use('/files', express.static(path.join(__dirname, 'files')));


app.get('/', (request, response) => {

    response.sendFile(path.join(__dirname, 'pages/persona.html'));

})

app.get('/listarProductos', (request, response) => {

    cn.getAll(request, response);

})

app.listen('9000', () => {
    console.log("Servidor arrancado")
})
