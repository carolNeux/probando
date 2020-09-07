const express = require('express');
const app = express();

app.listen(3030, () => {
    console.log('Servidor Corriendo');
});

app.get('/', function(req,res){
    res.send('Bienvenidos al sitio');
});

app.get('/contacto', function(req,res){
    res.send('  Dejanos tu contacto !');
});