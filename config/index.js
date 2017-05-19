module.exports = function(app){
  var express = require('express');
  app.use(express.static('public'));
  app.use('/components', express.static('bower_components'));

  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  var exphbs = require('express-handlebars');
  var path = require("path");
  function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  }
  var hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'application',
    layoutsDir: path.resolve('./app/views/layouts'),
    partialsDir: path.resolve('./app/views/partials'),
    helpers: {
      navbar: function(page, icon) {
        var capIcon = capitalize(icon);
        if (page === icon) {
          return `<li><a href="/${icon}" id="fire">${capIcon}</a></li>`;
        } else {
          return `<li><a href="/${icon}">${capIcon}</a></li>`;
        }
      }
    },
  });
  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');

  app.set('views', path.resolve("./app/views"));
}
