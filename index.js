var express = require("express");
var app = express();
var exphbs  = require('express-handlebars');

app.use(express.static("public"));
app.use(express.static("bower_components"));

app.engine('hbs', exphbs({
  extname : '.hbs',
  defaultLayout: 'application',
  layoutsDir: 'views/special-layouts/',
  partialsDir: 'views/special-partials/'
}));
app.set('view engine', 'hbs');

app.get('/home', function (req, res) {
    res.render('index', {
      home: true,
      title: 'HBS index page',
      message: 'Hello homepage',
    });
});

app.get('/albums', function (req, res) {
    var albums = [
      {
        link: "phanthuan.html",
        image: "image/PhanThuan/1.jpg",
        name: "Phan Hữu Thuận",
        pictures: 5,
        views: 38
      },
      {
        link: "thanhtram.html",
        image: "image/ThanhTram/2.jpg",
        name: "Trần Ngọc Thanh Trâm",
        pictures: 5,
        views: 208
      }
    ]
    res.render('albums', {
      albums: albums,
    });
});

app.get('/about', function (req, res) {
    res.render('about', {about: true});
});

app.get('/blog', function (req, res) {
    res.render('blog', {blog: true, message: 'Blog here!'});
});

app.listen(2707);
