var router = require('express').Router;
var controller = require('../app/controller/');
module.exports = function(app){
  var homeRouters = router()
    .get('/', controller.home.index);

  var albumsRouters = router()
    .get('/', controller.albums.index)
    .get('/:id', controller.albums.show);

  var blogRouters = router()
    .get('/', controller.blog.index);

  var aboutRouters = router()
    .get('/', controller.about.index);
  //aboutRouters.use('/blog', blogRouters);

  var contactRouters = router()
    .get('/', controller.contact.index)
    .post('/', controller.contact.show);

  app.use('/home', homeRouters);
  app.use('/albums', albumsRouters);
  app.use('/blog', blogRouters);
  app.use('/about', aboutRouters);
  app.use('/contact', contactRouters);
};
