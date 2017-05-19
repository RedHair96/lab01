// home-controller
var homeController = {
  index: function(req, res) {
    res.render('index', {
      page: 'home',
      title: 'HOMEPAGE',
      message: 'Hello homepage',
    })
  }
};

module.exports = homeController;
