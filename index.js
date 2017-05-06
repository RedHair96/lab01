var express = require("express");
var app = express();
var exphbs  = require('express-handlebars');

app.use(express.static("public"));
app.use(express.static("bower_components"));

app.engine('hbs', exphbs({}));
app.set('view engine', 'hbs');

app.get('/home', function (req, res) {
    res.render('index', {title: 'HBS index page', message: 'Hello homepage'});
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
      //["phanthuan.html", "image/PhanThuan/1.jpg", "Phan Hữu Thuận", 5, 38],
      //["thanhtram.html", "image/ThanhTram/2.jpg", "Trần Ngọc Thanh Trâm", 5, 108]
    ]
    res.render('albums', {albums: albums});
});

app.get('/about', function (req, res) {
    res.render('about', {});
});

app.get('/blog', function (req, res) {
    res.render('blog', {});
});

app.listen(2707);
