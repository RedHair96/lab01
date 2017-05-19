var express = require('express');
var app = express();

require('./config')(app);

var controller = require('./app/controller/');

//router
app.get('/home', controller.home.index);
app.get('/albums', controller.albums.index);
app.get('/albums/:id', controller.albums.show);
app.get('/about', controller.about.index);
app.get('/blog', controller.blog.index);
app.get('/contact', controller.contact.index);
app.post('/contact', controller.contact.show);


app.listen(2707);
