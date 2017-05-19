var User = require('../models/User');
// albums-controller
var albumsController = {
  index: function(req, res) {
    var userList = [];
    var users = User.findAll();
    var keyword = req.query.keyword;
    for (var i = 0; i < users.length; i++) {
      if (users[i].name.search(keyword) !== -1) {
        userList.push(users[i]);
      }
    }
    res.render('albums/index', {
      title: 'ALBUM',
      users: userList,
      page: 'albums',
    });
  },
  show: function(req, res) {
    var title;
    var images = [];
    var users = User.findAll();
    for (var i = 0; i < users.length; i++) {
      if (req.params.id == users[i].id) {
        title = users[i].name;
        keyword = req.query.keyword;
        for (var j = 0; j < users[i].images.length; j++) {
          if (users[i].images[j].search(keyword) !== -1) {
            images.push(users[i].images[j]);
          }
        }
        break;
      }
    }
    res.render(`albums/${req.params.id}`, {
      title: title,
      images: images,
      page: 'albums',
    });
  }
}
module.exports = albumsController;
