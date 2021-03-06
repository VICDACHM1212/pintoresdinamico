//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//Creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//Configurar rutas
app.get('/', (req, res)=>{
    res.render('index', {
        author : 'Victor Daniel Chavez Medina',
        year : new Date().getFullYear(),
        title : 'Pintores'
    });
})

app.get('/dali', (req, res)=>{
    res.render('dali', {
        author : 'Victor Daniel Chavez Medina',
        year : new Date().getFullYear(),
        title : 'Salvador Dali'
    });
})

app.get('/davinci', (req, res)=>{
    res.render('davinci', {
        author : 'Victor Daniel Chavez Medina',
        year : new Date().getFullYear(),
        title : 'Leonardo Da Vinci'
    });
})

app.get('/picasso', (req, res)=>{
    res.render('picasso', {
        author : 'Victor Daniel Chavez Medina',
        year : new Date().getFullYear(),
        title : 'Pablo Picasso'
    });
})

app.get('/vincent', (req, res)=>{
    res.render('vincent', {
        author : 'Victor Daniel Chavez Medina',
        year : new Date().getFullYear(),
        title : 'Vincent Van Gogh'
    });
})

//Arrancamos el servidor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
})